/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./sentry-api.android.d.ts" />
import { Common } from './sentry.common';
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { stringify } from "./utils/utils";


export class Sentry extends Common {

    
    private static getErrorDetails(args: any): any {
        if(typeof args === 'string') {
            return args;
        }
        let error;

        
        if(args.android){
            error = args.android;
        } else {
            error = args;
        }
        if (!error || !error.nativeException) {
            return {
                name: error.name || 'Error',
                nativeException: error.nativeException,
                message: error.message || stringify(error),
                stackTrace: error.stackTrace || null,
                stack: error.stack || null
            };
        } else if (error.nativeException) {
            return error.nativeException;
        }
        return error;
    }

    
    /**
     * capture
     */
    public static init(dsn: string) {

        try {
            if(application.android) {

                try {
                    io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
                } catch(error) {
                    console.log('[Sentry - Android] Exeption on init: ', error);
                }

                application.on(application.uncaughtErrorEvent, args => {
                    io.sentry.Sentry.capture(this.getErrorDetails(args));
                });
            }
        } catch(e){
            console.log('[Sentry - Android] Exeption on init: ', e);
        }
    }

    /**
     * capture
     */
    public static capture(error: any) {
        try {
            let event = new io.sentry.event.EventBuilder()
                .withMessage(stringify(this.getErrorDetails(error)))
                .withLevel(io.sentry.event.Event.Level.ERROR);
            io.sentry.Sentry.capture(event);
        } catch (sentryError) {
            console.log('[Sentry - Android] ORIGINAL ERROR:', error);
            console.log('[Sentry - Android] Exeption on capture: ', sentryError);
        }
    }
}

