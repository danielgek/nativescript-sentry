/// <reference path="typings/sentry-api.ios.d.ts" />
import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './';
export declare class Sentry {
  static init(dsn: string): void;
  static captureMessage(message: string, options?: MessageOptions): void;
  static captureException(exception: Error, options?: ExceptionOptions): void;
  static captureBreadcrumb(breadcrumb: BreadCrumb): void;
  static setContextUser(user: SentryUser): void;
  static setContextTags(tags: any): void;
  static setContextExtra(extra: any): void;
  static clearContext(): void;
  private static _convertSentryLevel;
  private static nativeCrash;
}
export declare enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
