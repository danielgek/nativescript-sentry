/// <reference path="node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="sentry-api.android.d.ts" />
import { Common } from './sentry.common';
import { SentryBreadcrumb } from './index';
export declare class Sentry extends Common {
    constructor();
    static init(dsn: string): void;
    static captureMessage(message: string, options: any): void;
    static captureException(exception: Error, options: any): void;
    static captureBreadcrumb(breadcrumb: SentryBreadcrumb): void;
    static setContextUser(user: SentryUser): void;
    static setContextTags(tags: any): void;
    static setContextExtra(extra: any): void;
    static clearContext(): void;
    static onBeforeSend(callback: any): void;
}
