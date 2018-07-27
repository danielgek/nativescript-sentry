/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { TNS_SentryBreadCrumb, TNS_SentryLevel } from './sentry.common';

export class Sentry {
  public static init(dsn: string) {
    try {
      // this is all the setup you need for android to handle uncaught exceptions
      // @link - https://forum.sentry.io/t/android-uncaught-exception/1764/2
      // @link - https://docs.sentry.io/clients/java/modules/android/#features
      io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
      console.log('sentry initialized');
      console.log(io.sentry.Sentry.getStoredClient());
      // io.sentry.Sentry.getStoredClient().setupUncaughtExceptionHandler();
    } catch (error) {
      // not good
    }

    application.on(application.uncaughtErrorEvent, (args: application.UnhandledErrorEventData) => {
      console.log('UH OH BRAD');
      const x = new java.lang.Throwable(args.android.stack);
      io.sentry.Sentry.capture(x);
    });
  }

  public static captureMessage(message: string, level?: TNS_SentryLevel) {
    try {
      const sentryClient = io.sentry.Sentry.getStoredClient();

      console.log(sentryClient.getServerName());
      const sentryLevel = this._convertSentryEventLevel(level);
      const event = new io.sentry.event.EventBuilder().withMessage(message).withLevel(sentryLevel);
      sentryClient.sendEvent(event);
    } catch (error) {
      console.log(error);
    }
  }

  public static captureException(exception: Error) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    console.log('stored client', sentryClient);
    const x = new java.lang.Throwable(exception.stack);
    sentryClient.sendException(x);
    console.log('sent exception to sentry android');
  }

  public static captureBreadcrumb(breadcrumb: TNS_SentryBreadCrumb) {
    try {
      const breadcrumbNative = new io.sentry.event.BreadcrumbBuilder();
      const lvl = this._convertSentryBreadcrumbLevel(breadcrumb.level);
      breadcrumbNative.setLevel(lvl);
      breadcrumbNative.setCategory(breadcrumb.category);
      // .setLevel(breadcrumb.level) // add the level enum to map correctly
      breadcrumbNative.setMessage(breadcrumb.message);
      const sentryClient = io.sentry.Sentry.getStoredClient();
      sentryClient.getContext().recordBreadcrumb(breadcrumbNative.build());
      console.log('recorded breadcrumb for sentry android');
    } catch (error) {
      console.log(error);
    }
  }

  public static setContextUser(user: SentryUser): void {
    const userNative = new io.sentry.event.UserBuilder()
      .setEmail(user.email)
      .setUsername(user.username)
      .build();

    const sentryClient = io.sentry.Sentry.getStoredClient();
    sentryClient.getContext().setUser(userNative);
  }

  public static setContextTags(tags: any): void {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(tags).forEach(key => {
      sentryClient.addTag(key, tags[key]);
    });
  }

  public static setContextExtra(extra: any) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(extra).forEach(key => {
      sentryClient.addExtra(key, extra[key]);
    });
  }

  public static clearContext() {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    sentryClient.clearContext();
  }

  public static onBeforeSend(callback) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    const shouldSend = new io.sentry.event.helper.ShouldSendEventCallback({
      shouldSend: event => {
        return callback(event);
      }
    });
    sentryClient.addShouldSendEventCallback(shouldSend);
  }

  /**
   * Returns the android Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryBreadcrumbLevel(level: TNS_SentryLevel) {
    if (!level) {
      console.log('no level provided so returning INFO type');
      return io.sentry.event.Breadcrumb.Level.INFO;
    }

    switch (level) {
      case TNS_SentryLevel.Info:
        return io.sentry.event.Breadcrumb.Level.INFO;
      case TNS_SentryLevel.Warning:
        return io.sentry.event.Breadcrumb.Level.WARNING;
      case TNS_SentryLevel.Fatal:
        return io.sentry.event.Breadcrumb.Level.CRITICAL;
      case TNS_SentryLevel.Error:
        return io.sentry.event.Breadcrumb.Level.ERROR;
      case TNS_SentryLevel.Debug:
        return io.sentry.event.Breadcrumb.Level.DEBUG;
      default:
        return io.sentry.event.Breadcrumb.Level.INFO;
    }
  }

  private static _convertSentryEventLevel(level) {
    if (!level) {
      console.log('no level provided so returning INFO type');
      return io.sentry.event.Breadcrumb.Level.INFO;
    }

    switch (level) {
      case TNS_SentryLevel.Info:
        return io.sentry.event.Event.Level.INFO;
      case TNS_SentryLevel.Warning:
        return io.sentry.event.Event.Level.WARNING;
      case TNS_SentryLevel.Fatal:
        return io.sentry.event.Event.Level.FATAL;
      case TNS_SentryLevel.Error:
        return io.sentry.event.Event.Level.ERROR;
      case TNS_SentryLevel.Debug:
        return io.sentry.event.Event.Level.DEBUG;
      default:
        return io.sentry.event.Event.Level.INFO;
    }
  }
}
