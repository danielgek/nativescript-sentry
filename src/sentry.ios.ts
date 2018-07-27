/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/sentry-api.ios.d.ts" />

import { SentryUser, TNS_SentryBreadCrumb, TNS_SentryLevel } from './sentry.common';

export class Sentry {
  public static init(dsn: string) {
    try {
      SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(dsn);
      SentryClient.sharedClient.startCrashHandlerWithError();
    } catch (error) {
      // not good
    }
  }

  public static captureMessage(message: string, level?: TNS_SentryLevel) {
    const event = SentryEvent.alloc();
    event.message = message;
    const sentryLevel = this._convertSentryLevel(level) as SentrySeverity;
    console.log('Sentry level returned', sentryLevel);
    event.level = sentryLevel;
    SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
      // nothing here
    });
  }

  public static captureException(exception: Error) {
    SentryClient.sharedClient.snapshotStacktrace(() => {
      // BRAD - I don't think we need to do the stack trace here bc it's the iOS/Apple stack and it's not helpful for debugging.
      // The actual `message` for the event is the stack trace we're throwing from the JS side which is more than enough to debug exceptions.
      try {
        const event = SentryEvent.alloc().initWithLevel(SentrySeverity.kSentrySeverityError);
        event.message = exception.stack ? exception.stack : exception.message;

        SentryClient.sharedClient.appendStacktraceToEvent(event);
        // event.environment = options.environment;
        // event.releaseName = options.release;
        // need to parse this out
        // event.extra = options.extra;
        SentryClient.sharedClient.sendEventWithCompletionHandler(event, () => {
          // nothing here
          console.log('send event completion handler');
        });
      } catch (error) {
        console.log('sentry error brad', error);
      }
    });
  }
  public static captureBreadcrumb(breadcrumb: TNS_SentryBreadCrumb) {
    const sentryLevel = this._convertSentryLevel(breadcrumb.level);
    // init the iOS SentryBreadCrumb
    const sentryBC = new SentryBreadcrumb(null).initWithLevelCategory(sentryLevel, breadcrumb.category);
    sentryBC.message = breadcrumb.message;
    SentryClient.sharedClient.breadcrumbs.addBreadcrumb(sentryBC);
  }

  public static setContextUser(user: SentryUser): void {
    const userNative = SentryUser.alloc().init();
    userNative.email = user.email;
    userNative.username = user.username;
    SentryClient.sharedClient.user = userNative;
  }

  public static setContextTags(tags: any) {
    SentryClient.sharedClient.tags = tags;
  }
  public static setContextExtra(extra: any) {
    SentryClient.sharedClient.extra = extra;
  }

  public static clearContext() {
    SentryClient.sharedClient.clearContext();
  }

  public static onBeforeSend(callback) {
    SentryClient.sharedClient.beforeSerializeEvent = event => {
      callback(event);
    };
  }

  /**
   * Returns the ios Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryLevel(level: TNS_SentryLevel) {
    if (!level) {
      console.log('no level provided so returning INFO type');
      return SentrySeverity.kSentrySeverityInfo;
    }

    switch (level) {
      case TNS_SentryLevel.Info:
        return SentrySeverity.kSentrySeverityInfo;
      case TNS_SentryLevel.Warning:
        return SentrySeverity.kSentrySeverityWarning;
      case TNS_SentryLevel.Fatal:
        return SentrySeverity.kSentrySeverityFatal;
      case TNS_SentryLevel.Error:
        return SentrySeverity.kSentrySeverityError;
      case TNS_SentryLevel.Debug:
        return SentrySeverity.kSentrySeverityDebug;
      default:
        return SentrySeverity.kSentrySeverityInfo;
    }
  }
}
