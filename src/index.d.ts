

import { Common } from './sentry.common';

export declare class Sentry extends Common {
    static init(dsn: string, options: SentryOptions): void;
    static setContextUser(user: SentryUser): void;
    static setContextTags(tags: any): void;
    static setContextExtra(extra: any): void;
    static clearContext(): void;
    static captureMessage(message: string, options: SentryOptions): void;
    static captureException(exeption: Error, options: SentryOptions): void;
    static captureBreadcrumb(breadcrumb: SentryBreadcrumb): void;
    // static capture(error: any): void; // Deprecated !!
    // static setEventSentSuccessfully(callback: Function): void; // TODO 
    // static setShouldSendCallback(callback: Function): void; // TODO 
    // static setDataCallback(callback: Function): void; // TODO 
}

export interface SentryUser {
    email?: string;
    username?: string;
    id?: string;
}

export enum SentrySeverity {
    Fatal = 'fatal',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Debug = 'debug',
    Critical = 'critical'
}

export interface SentryBreadcrumb {
    message?: string;
    category?: string;
    // level?: SentrySeverity;
    data?: any;
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