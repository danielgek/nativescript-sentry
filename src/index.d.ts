export declare class Sentry {
  static init(dsn: string): void;
  static setContextUser(user: SentryUser): void;
  static setContextTags(tags: any): void;
  static setContextExtra(extra: any): void;
  static clearContext(): void;
  static captureMessage(message: string, level?: TNS_SentryLevel): void;
  static captureException(exeption: Error, options?: SentryOptions): void;
  static captureBreadcrumb(breadcrumb: TNS_SentryBreadCrumb): void;
}

export interface SentryUser {
  email?: string;
  username?: string;
  id?: string;
}

export enum TNS_SentryLevel {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}

export interface TNS_SentryBreadCrumb {
  message: string;
  category: string;
  level: TNS_SentryLevel;
}
export interface SentryOptions {
  // level?: SentrySeverity;
  environment?: string;
  release?: string;
  tags?: {
    [id: string]: string;
  };
  extra?: any;
}
