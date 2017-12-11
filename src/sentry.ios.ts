/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./sentry-api.ios.d.ts" />
import { Common } from './sentry.common';
import * as application from 'tns-core-modules/application';
import { SentryAppDelegate } from './sentry.appdelegate';
import { stringify } from './utils/utils';
import { SentryUser } from './index';
import * as utils from 'tns-core-modules/utils/utils';

export class Sentry extends Common {
    public static init(dsn: string) {
        this._init(dsn);
        try {
            SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(
                dsn
            );
            application.ios.delegate = SentryAppDelegate;
        } catch (error) {
            console.log('[Sentry - iOS] Exeption on init: ', error);
        }
        application.on(application.uncaughtErrorEvent, args => {
            try {
                // TODO: test this shit
                SentryJavaScriptBridgeHelper.parseJavaScriptStacktrace(args.ios);
                // SentryClient.sharedClient.
            } catch (e) {
                console.log('[Sentry - iOS] Exeption on uncaughtErrorEvent: ', e);
            }
        });
    }

    public static captureMessage(message: string, options) {
        this._captureMessage(message, options);
    }
    public static captureException(exception: Error, options) {
        this._captureException(exception, options);
    }
    public static captureBreadcrumb(breadcrumb) {
        this._captureBreadcrumb(breadcrumb);
        // SentryClient.sharedClient.bre
        // TODO
    }

    public static setContextUser(user: SentryUser): void {
        this._setUser(user);
        let userNative = SentryUser.alloc().init();
        userNative.email = user.email;
        userNative.username = user.username;

        SentryClient.sharedClient.user = userNative;
    }

    public static setContextTags(tags: any) {
        this._setTags(tags);
        SentryClient.sharedClient.tags = tags;
    }
    public static setContextExtra(extra: any) {
        this._setExtra(extra);
        SentryClient.sharedClient.extra = extra;
    }

    public static clearContext() {
        this._clearContext();
        SentryClient.sharedClient.clearContext();
    }

    public static onBeforeSend(callback) {
        SentryClient.sharedClient.beforeSerializeEvent = event => {
            console.log('vou enviar no ios');
            callback(event);
        };
    }
}
