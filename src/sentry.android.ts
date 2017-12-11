/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./sentry-api.android.d.ts" />
import { Common } from './sentry.common';
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { stringify } from './utils/utils';
import { SentryBreadcrumb } from './index';

export class Sentry extends Common {
    constructor() {
        super();
    }

    public static init(dsn: string) {
        this._init(dsn);
        try {
            io.sentry.Sentry.init(
                dsn,
                new io.sentry.android.AndroidSentryClientFactory(
                    utils.ad.getApplicationContext()
                )
            );
        } catch (error) {
            console.log('[Sentry - Android] Exeption on init: ', error);
        }
        application.on(application.uncaughtErrorEvent, args => {
            try {
                io.sentry.Sentry.capture(args.android);
            } catch (e) {
                console.log('[Sentry - Android] Exeption on capture: ', e);
            }
        });

    }

    public static captureMessage(message: string, options) {
        this._captureMessage(message, options);
    }
    public static captureException(exception: Error, options) {
        this._captureException(exception, options);
    }
    public static captureBreadcrumb(breadcrumb: SentryBreadcrumb) {
        this._captureBreadcrumb(breadcrumb);
        let breadcrumbNative = new io.sentry.event.BreadcrumbBuilder()
            .setCategory(breadcrumb.category)
            .setMessage(breadcrumb.message)
            .setData(breadcrumb.data);
            // TODO
            // switch() {
            //     case '':
            // }
        let sentryClient = io.sentry.Sentry.getStoredClient();
        sentryClient.getContext().recordBreadcrumb(breadcrumbNative.build());
    }

    public static setContextUser(user: SentryUser): void {
        this._setUser(user);
        let userNative = new io.sentry.event.UserBuilder()
            .setEmail(user.email)
            .setUsername(user.username)
            .build();

        let sentryClient = io.sentry.Sentry.getStoredClient();
        sentryClient.getContext().setUser(userNative);
    }

    public static setContextTags(tags: any): void {
        this._setTags(tags);
        let sentryClient = io.sentry.Sentry.getStoredClient();
        Object.keys(tags).forEach((key) => {
            sentryClient.addTag(key, tags[key]);
        });

    }

    public static setContextExtra(extra: any) {
        this._setExtra(extra);
        let sentryClient = io.sentry.Sentry.getStoredClient();
        Object.keys(extra).forEach(key => {
            sentryClient.addExtra(key, extra[key]);
        });
    }
    public static clearContext() {
        this._clearContext();
        let sentryClient = io.sentry.Sentry.getStoredClient();
        sentryClient.clearContext();
    }
    public static onBeforeSend(callback) {
        let sentryClient = io.sentry.Sentry.getStoredClient();
        let shouldSend = new io.sentry.event.helper.ShouldSendEventCallback({
            shouldSend: event => {
                console.log('vou enviar no android');
                return callback(event);
                // return true; // true === send event, false don't send the event
            }
        });
        sentryClient.addShouldSendEventCallback(shouldSend);
    }
}
