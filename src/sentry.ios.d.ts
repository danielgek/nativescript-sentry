/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="sentry-api.ios.d.ts" />
import { Common } from './sentry.common';
export declare class Sentry extends Common {
    private static getErrorDetails(args);
    static init(dsn: string): void;
    static capture(error: any): void;
    static onBeforeSend(callback: any): void;
}
