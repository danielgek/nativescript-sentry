/// <reference path="typings/sentry-api.android.d.ts" />
import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './';
export declare class Sentry {
  static init(dsn: string): void;
  static captureMessage(message: string, options?: MessageOptions): void;
  static captureException(exception: Error, options?: ExceptionOptions): void;
  static captureBreadcrumb(breadcrumb: BreadCrumb): void;
  static setContextUser(user: SentryUser): void;
  static setContextTags(tags: object): void;
  static setContextExtra(extra: object): void;
  static clearContext(): void;
  private static _convertSentryBreadcrumbLevel;
  private static _convertSentryEventLevel;
  private static _convertDataTypeToJavaObject;
  private static _numberHasDecimals;
  private static _numberIs64Bit;
}
export declare enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
