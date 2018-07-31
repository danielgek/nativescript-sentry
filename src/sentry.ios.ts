/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/sentry-api.ios.d.ts" />

import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './index';

export class Sentry {
  public static init(dsn: string) {
    SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(dsn);
    SentryClient.sharedClient.startCrashHandlerWithError();
    SentryClient.sharedClient.enableAutomaticBreadcrumbTracking();
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    if (options && options.extra) {
      this.setContextExtra(options.extra);
    }

    if (options && options.tags) {
      this.setContextTags(options.tags);
    }
    const level = options && options.level ? options.level : null;

    const event = SentryEvent.alloc().initWithLevel(this._convertSentryLevel(level));
    event.message = message;
    SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
      // nothing here
    });
  }

  public static captureException(exception: Error, options?: ExceptionOptions) {
    if (options && options.extra) {
      this.setContextExtra(options.extra);
    }

    if (options && options.tags) {
      this.setContextTags(options.tags);
    }

    const event = SentryEvent.alloc().initWithLevel(SentrySeverity.kSentrySeverityError);
    event.message = exception.stack ? exception.stack : exception.message;
    SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
      // nothing here
    });
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // create the iOS SentryBreadCrumb
    const sentryBC = SentryBreadcrumb.alloc().initWithLevelCategory(
      this._convertSentryLevel(breadcrumb.level),
      breadcrumb.category
    );
    sentryBC.message = breadcrumb.message;
    SentryClient.sharedClient.breadcrumbs.addBreadcrumb(sentryBC);
  }

  public static setContextUser(user: SentryUser) {
    const userNative = SentryUser.alloc().initWithUserId(user.id);
    userNative.email = user.email ? user.email : '';
    userNative.username = user.username ? user.username : '';
    SentryClient.sharedClient.user = userNative;
  }

  public static setContextTags(tags: object) {
    SentryClient.sharedClient.tags = tags;
  }
  public static setContextExtra(extra: object) {
    SentryClient.sharedClient.extra = extra;
  }

  public static clearContext() {
    SentryClient.sharedClient.clearContext();
  }

  /**
   * Returns the ios Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryLevel(level: Level) {
    if (!level) {
      return SentrySeverity.kSentrySeverityInfo;
    }

    switch (level) {
      case Level.Info:
        return SentrySeverity.kSentrySeverityInfo;
      case Level.Warning:
        return SentrySeverity.kSentrySeverityWarning;
      case Level.Fatal:
        return SentrySeverity.kSentrySeverityFatal;
      case Level.Error:
        return SentrySeverity.kSentrySeverityError;
      case Level.Debug:
        return SentrySeverity.kSentrySeverityDebug;
      default:
        return SentrySeverity.kSentrySeverityInfo;
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
