/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./sentry-api.android.d.ts" />
import { Common } from './sentry.common';
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { stringify } from "./utils/utils";
import * as ErrorStackParser from 'error-stack-parser';


export class Sentry extends Common {


    constructor() {
        super();
    }

    /**
     * init
     */
    public static init(dsn: string) {

        try {
            io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
        } catch (error) {
            console.log('[Sentry - Android] Exeption on init: ', error);
        }
        application.on(application.uncaughtErrorEvent, args => {
            try {
                io.sentry.Sentry.capture(args);
            } catch (e) {
                console.log('[Sentry - Android] Exeption on capture: ', e);
            }
        });
    }

    private static getErrorDetails(error: any): Error {

        console.log('getErrorDetails');
        if (error.android) {
            console.log('error.android');
            error = error.android;
        }
        // console.log(error);
        // console.dir(error);
        if (error instanceof Error) {
            console.log('is a new Error ');
            // console.log((error as Error).name);
            // console.log((error as Error).message);
            // console.log((error as Error).stack);
            return error;
        } else if (typeof error === 'string') {
            console.log('this is a string error');
            console.log(error); 
            console.dir(new Error(error));
            // let newError = new Error();
            // newError.message = error.toString();
            // newError.name = 'Error';
            // newError.stack = (error as any ).
            return new Error((error as any).originalStack);

        }


        if (error.android) {
            console.log('error.android');
            error = error.android;
        }
        return error;
    }



    /**
     * capture
     */
    public static capture(error: any) {
        try {

            let errorWithDetails = this.getErrorDetails(error);
            let stackArray = Array.of<java.lang.StackTraceElement>();

            const parsedStack: ErrorStackParser.StackFrame[] = ErrorStackParser.parse(errorWithDetails);
            parsedStack
                .forEach((stackFrame: ErrorStackParser.StackFrame) => {
                    stackArray.push(
                        new java.lang.StackTraceElement(
                            stackFrame.source,
                            stackFrame.functionName,
                            stackFrame.fileName,
                            stackFrame.lineNumber
                        )
                    );
            });

            let event = new io.sentry.event.EventBuilder()
                .withMessage(`Name: ${error.name} | Message: ${error.message}`)
                .withLevel(io.sentry.event.Event.Level.ERROR)
                .withSentryInterface(
                    new io.sentry.event.interfaces.StackTraceInterface(
                        io.sentry.event.interfaces.SentryStackTraceElement.fromStackTraceElements(stackArray, null)
                    ));
            io.sentry.Sentry.capture(event);
        } catch (sentryError) {
            console.log('[Sentry - Android] ORIGINAL ERROR:', error);
            console.log('[Sentry - Android] Exeption on capture: ', sentryError);
        }
    }

    public static onBeforeSend(callback) {
        let sentryClient = io.sentry.Sentry.getStoredClient();
        let shouldSend = new io.sentry.event.helper.ShouldSendEventCallback({
            shouldSend: (event) => {
                console.log('vou enviar no android');
                return callback(event);
                // return true; // true === send event, false don't send the event
            }
        });
        sentryClient.addShouldSendEventCallback(shouldSend);
    }
}

