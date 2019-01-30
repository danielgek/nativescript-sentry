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
      // adding data type check to not limit extras to string values
      // @link : https://github.com/danielgek/nativescript-sentry/issues/22
      // for (const [key, value] of Object.entries(options.extra)) {
      //   const nativeDataValue = Sentry._convertDataTypeToJavaObject(value);
      //   event = event.withExtra(key, nativeDataValue);
      // }

      Object.keys(options.extra).forEach(key => {
        // adding type check to not force toString on the extra
        // @link: https://github.com/danielgek/nativescript-sentry/issues/22
        const nativeDataValue = Sentry._convertDataTypeToJavaObject(options.extra[key]);
        event = event.withExtra(key, nativeDataValue);
      });
    }

    if (options && options.tags) {
      // tags are required as strings
      Object.keys(options.tags).forEach(key => {
        event.withTag(key, options.tags[key].toString());
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
      // adding type check to not force toString on the extra
      // @link: https://github.com/danielgek/nativescript-sentry/issues/22
      const nativeDataValue = Sentry._convertDataTypeToJavaObject(extra[key]);
      sentryClient.addExtra(key, nativeDataValue);
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

  /**
   * Takes the provided value and checks for boolean or number and creates a native data type instance.
   * @param value
   */
  private static _convertDataTypeToJavaObject(value) {
    let result = null;
    if (typeof value === typeof true) {
      result = new java.lang.Boolean(value);
    } else if (!isNaN(value)) {
      result = new java.lang.Integer(value);
    } else {
      result = new java.lang.String(value);
    }
    return result;
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
