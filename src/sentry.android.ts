/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as application from 'tns-core-modules/application/application';
import * as utils from 'tns-core-modules/utils/utils';
import { SentryBreadcrumb } from './index';

export class Sentry {
  public static init(dsn: string) {
    try {
      io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
    } catch (error) {
      // not good
    }
    application.on(application.uncaughtErrorEvent, args => {
      try {
        io.sentry.Sentry.capture(args.android);
      } catch (error) {
        // not good
      }
    });
  }

  public static captureMessage(message: string, options) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    sentryClient.sendMessage(message);
  }

  public static captureException(exception: Error) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    const x = new java.lang.Throwable(exception.stack);
    sentryClient.sendException(x);
  }

  public static captureBreadcrumb(breadcrumb: SentryBreadcrumb) {
    const breadcrumbNative = new io.sentry.event.BreadcrumbBuilder()
      .setCategory(breadcrumb.category)
      // .setLevel(breadcrumb.level) // add the level enum to map correctly
      .setMessage(breadcrumb.message)
      .setData(breadcrumb.data);
    // TODO
    // switch() {
    //     case '':
    // }
    const sentryClient = io.sentry.Sentry.getStoredClient();
    sentryClient.getContext().recordBreadcrumb(breadcrumbNative.build());
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
}
