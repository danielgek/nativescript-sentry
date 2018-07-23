/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/sentry-api.ios.d.ts" />

import * as application from 'tns-core-modules/application/application';
import { SentryOptions, SentryUser } from './index';
import { SentryAppDelegate } from './sentry.appdelegate';
import { Common } from './sentry.common';

export class Sentry extends Common {
  public static init(dsn: string) {
    // this._init(dsn);

    try {
      SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(dsn);
      application.ios.delegate = SentryAppDelegate;
    } catch (error) {
      // not good
    }

    // setup uncaught error event
    application.on(application.uncaughtErrorEvent, args => {
      try {
        SentryJavaScriptBridgeHelper.parseJavaScriptStacktrace(args.ios);
      } catch (e) {
        // not good
      }
    });
  }

  public static captureMessage(message: string, options?: SentryOptions) {
    const event = SentryEvent.alloc();
    // event.level = options.level;
    event.message = message;
    SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
      // nothing here
    });
  }

  public static captureException(exception: Error, options?: SentryOptions) {
    const msg = {
      name: exception.name,
      message: exception.message,
      stack: exception.stack
    };
    const data = JSON.stringify(msg);

    const event = SentryEvent.alloc().initWithLevel(SentrySeverity.kSentrySeverityError);
    event.message = data;
    event.environment = options.environment;
    event.releaseName = options.release;
    // need to parse this out
    // event.extra = options.extra;

    SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
      // nothing here
    });
  }
  public static captureBreadcrumb(breadcrumb: SentryBreadcrumb) {
    // this._captureBreadcrumb(breadcrumb);

    breadcrumb.message;
    const x = breadcrumb.level;

    SentryClient.sharedClient.breadcrumbs.addBreadcrumb(breadcrumb);
  }

  public static setContextUser(user: SentryUser): void {
    // this._setUser(user);
    const userNative = SentryUser.alloc().init();
    userNative.email = user.email;
    userNative.username = user.username;

    SentryClient.sharedClient.user = userNative;
  }

  public static setContextTags(tags: any) {
    // this._setTags(tags);
    SentryClient.sharedClient.tags = tags;
  }
  public static setContextExtra(extra: any) {
    // this._setExtra(extra);
    SentryClient.sharedClient.extra = extra;
  }

  public static clearContext() {
    // this._clearContext();
    SentryClient.sharedClient.clearContext();
  }

  public static onBeforeSend(callback) {
    SentryClient.sharedClient.beforeSerializeEvent = event => {
      callback(event);
    };
  }
}
