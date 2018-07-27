export enum TNS_SentryLevel {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}

export interface SentryUser {
  email?: string;
  username?: string;
  id?: string;
}

// tslint:disable-next-line:class-name
export interface TNS_SentryBreadCrumb {
  message: string;
  category: string;
  level: TNS_SentryLevel;
}

export interface SentryOptions {
  level?: TNS_SentryLevel;
  tags?: {
    [id: string]: string;
  };
  extra?: any;
}
