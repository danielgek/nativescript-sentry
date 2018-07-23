/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as application from 'tns-core-modules/application/application';
import * as utils from 'tns-core-modules/utils/utils';
import { SentryBreadcrumb, SentryOptions } from './index';

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

  public static captureException(exception: Error, options?: SentryOptions) {
    // build out an object with stack, message and name from the Error
    const msg = {
      name: exception.name,
      message: exception.message,
      stack: exception.stack
    };
    const data = JSON.stringify(msg);

    const eventBuilder = new io.sentry.event.EventBuilder()
      .withMessage(data)
      .withRelease(options.release)
      .withEnvironment(options.environment)
      .withLevel(io.sentry.event.Event.Level.ERROR);

    io.sentry.Sentry.capture(eventBuilder);
  }

  public static captureBreadcrumb(breadcrumb: SentryBreadcrumb) {
    const breadcrumbNative = new io.sentry.event.BreadcrumbBuilder()
      .setCategory(breadcrumb.category)
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
