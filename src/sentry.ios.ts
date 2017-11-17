/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./sentry-api.ios.d.ts" />
import { Common } from './sentry.common';
import * as application from 'tns-core-modules/application';
import { SentryAppDelegate } from './sentry.appdelegate';
import { stringify } from './utils/utils';


export class Sentry extends Common {
    private static getErrorDetails(args: any): any {
        let error;
        if (args.ios) {
            console.log('got the ios obj');
            error = args.ios;
        } else {
            console.log('got args');
            error = args;
        }

        console.log(typeof error);
        console.log(stringify(error));
        if (typeof error === 'string') {
            error = new Error(error);
        }
        return new Error(stringify(error));
    }

    public static init(dsn: string) {
        try {
            SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(dsn);
            application.ios.delegate = SentryAppDelegate;
        } catch (error) {
            console.log('[Sentry - iOS] Exeption on init: ', error);
        }
    }

    public static capture(error: any) {
        try {
            console.log('got to this point');
            console.dir(this.getErrorDetails(error));

            let event = SentryEvent.alloc().initWithLevel(SentrySeverity.kSentrySeverityError);
            event.message = this.getErrorDetails(error);
            SentryClient.sharedClient.sendEventWithCompletionHandler(event, (error) => {
                if (error) {
                    console.log('[Sentry - iOS] Exeption on capture: ', error);
                }
            });

        } catch (sentryError) {
            console.log('[Sentry - iOS] ORIGINAL ERROR:', error);
            console.log('[Sentry - iOS] Exeption on capture: ', sentryError);
        }
    }

    public static onBeforeSend(callback) {
        SentryClient.sharedClient.beforeSerializeEvent = (event) => {
            console.log('vou enviar no ios');
            callback(event);
        };
    }
}
