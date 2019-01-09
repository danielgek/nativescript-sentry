/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as utils from 'tns-core-modules/utils/utils';
import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './index';

export class Sentry {
  public static init(dsn: string) {
    // this is all the setup you need for android to handle uncaught exceptions
    // @link - https://forum.sentry.io/t/android-uncaught-exception/1764/2
    // @link - https://docs.sentry.io/clients/java/modules/android/#features
    io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    const level = options && options.level ? options.level : null;

    let event = new io.sentry.event.EventBuilder().withMessage(message).withLevel(this._convertSentryEventLevel(level));

    if (options && options.extra) {
      Object.keys(options.extra).forEach(key => {
        event = event.withExtra(key, options.extra[key].toString());
      });
    }

    if (options && options.tags) {
      Object.keys(options.tags).forEach(key => {
        event = event.withTag(key, options.tags[key].toString());
      });
    }
    io.sentry.Sentry.getStoredClient().sendEvent(event);
  }

  public static captureException(exception: Error, options?: ExceptionOptions) {
    // TODO: attach tags and extra directly on the exeption
    if (options && options.extra) {
      this.setContextExtra(options.extra);
    }

    if (options && options.tags) {
      this.setContextTags(options.tags);
    }

    const cause = new java.lang.Throwable(exception.stack);

    // creating a new Exception to send to Sentry which will include the
    // JS Error stacktrace as the "cause" and the JS Error message as the Throwable "message"
    // https://developer.android.com/reference/java/lang/Exception.html#Exception(java.lang.String,%20java.lang.Throwable)
    const ex = new java.lang.Exception(exception.message, cause);
    io.sentry.Sentry.getStoredClient().sendException(ex);
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // create breadcrumb
    const breadcrumbNative = new io.sentry.event.BreadcrumbBuilder()
      .setLevel(this._convertSentryBreadcrumbLevel(breadcrumb.level)) // set the level
      .setCategory(breadcrumb.category) // set category
      .setMessage(breadcrumb.message); // set message

    // record breadcrumb
    io.sentry.Sentry.getStoredClient()
      .getContext()
      .recordBreadcrumb(breadcrumbNative.build());
  }

  public static setContextUser(user: SentryUser) {
    const userNative = new io.sentry.event.UserBuilder()
      .setId(user.id)
      .setEmail(user.email ? user.email : '')
      .setUsername(user.username ? user.username : '')
      .build();

    io.sentry.Sentry.getStoredClient()
      .getContext()
      .setUser(userNative);
  }

  public static setContextTags(tags: object) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(tags).forEach(key => {
      sentryClient.addTag(key, tags[key].toString());
    });
  }

  public static setContextExtra(extra: object) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(extra).forEach(key => {
      sentryClient.addExtra(key, extra[key].toString());
    });
  }

  public static clearContext() {
    io.sentry.Sentry.getStoredClient().clearContext();
  }

  /**
   * Returns the android Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryBreadcrumbLevel(level: Level) {
    if (!level) {
      return io.sentry.event.Breadcrumb.Level.INFO;
    }

    switch (level) {
      case Level.Info:
        return io.sentry.event.Breadcrumb.Level.INFO;
      case Level.Warning:
        return io.sentry.event.Breadcrumb.Level.WARNING;
      case Level.Fatal:
        return io.sentry.event.Breadcrumb.Level.CRITICAL;
      case Level.Error:
        return io.sentry.event.Breadcrumb.Level.ERROR;
      case Level.Debug:
        return io.sentry.event.Breadcrumb.Level.DEBUG;
      default:
        return io.sentry.event.Breadcrumb.Level.INFO;
    }
  }

  private static _convertSentryEventLevel(level: Level) {
    if (!level) {
      return io.sentry.event.Event.Level.INFO;
    }

    switch (level) {
      case Level.Info:
        return io.sentry.event.Event.Level.INFO;
      case Level.Warning:
        return io.sentry.event.Event.Level.WARNING;
      case Level.Fatal:
        return io.sentry.event.Event.Level.FATAL;
      case Level.Error:
        return io.sentry.event.Event.Level.ERROR;
      case Level.Debug:
        return io.sentry.event.Event.Level.DEBUG;
      default:
        return io.sentry.event.Event.Level.INFO;
    }
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
