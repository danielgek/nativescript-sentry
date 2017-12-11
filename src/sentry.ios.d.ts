/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="sentry-api.ios.d.ts" />
import { Common } from './sentry.common';
import { SentryUser } from './index';
export declare class Sentry extends Common {
    static init(dsn: string): void;
    static captureMessage(message: string, options: any): void;
    static captureException(exception: Error, options: any): void;
    static captureBreadcrumb(breadcrumb: any): void;
    static setContextUser(user: SentryUser): void;
    static setContextTags(tags: any): void;
    static setContextExtra(extra: any): void;
    static clearContext(): void;
    static onBeforeSend(callback: any): void;
}
