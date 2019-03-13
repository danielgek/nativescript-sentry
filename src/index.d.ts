export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}

export interface SentryUser {
  id: string;
  email?: string;
  username?: string;
  data?: object;
}

export interface BreadCrumb {
  message: string;
  category: string;
  level: Level;
}

export interface MessageOptions {
  level?: Level;

  /**
   * Object of additional Key/value pairs which generate breakdowns charts and search filters.
   */
  tags?: object;

  /**
   * Object of unstructured data which is stored with events.
   */
  extra?: object;
}

export interface ExceptionOptions {
  /**
   * Object of additional Key/value pairs which generate breakdowns charts and search filters in Sentry.
   */
  tags?: object;

  /**
   * Object of unstructured data which is stored with events.
   */
  extra?: object;
}

export abstract class Sentry {
  /**
   * Initializes the Sentry SDK for the provided DSN key.
   * @param dsn [string] - The client DSN key for the Sentry project.
   */
  static init(dsn: string): void;

  /**
   * Log a message.
   * @param message [string] - The message to log.
   * @param level [MessageOptions] - The options (level, tags, extra) for the message.
   */
  static captureMessage(message: string, options?: MessageOptions): void;

  /**
   * Log an exception.
   * @param exeption [Error] - The exception to log.
   * @param options [ExceptionOptions] - The options (tags, extra) for the exception.
   */
  static captureException(exeption: Error, options?: ExceptionOptions): void;

  /**
   * Log a breadcrumb for the current Sentry context.
   * @param breadcrumb [BreadCrumb] - The breadcrumb to capture.
   */
  static captureBreadcrumb(breadcrumb: BreadCrumb): void;

  /**
   * Set a user to the Sentry context.
   * @param user [SentryUser] - The user to set with the current Sentry context.
   */
  static setContextUser(user: SentryUser): void;

  /**
   * Set an object of additional Key/value pairs which generate breakdowns charts and search filters.
   * @param tags [object] - Object of additional Key/value pairs.
   */
  static setContextTags(tags: object): void;

  /**
   * Set an object of unstructured data which is stored with events for the current Sentry context.
   * @param extra [object] - An arbitrary object of Key/value pairs.
   */
  static setContextExtra(extra: object): void;

  /**
   * Clears the context of the current Sentry context.
   * The current context is created during the `init` execution.
   */
  static clearContext(): void;
}
