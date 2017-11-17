/// <reference path="node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="sentry-api.android.d.ts" />
import { Common } from './sentry.common';
export declare class Sentry extends Common {
    constructor();
    static init(dsn: string): void;
    private static getErrorDetails(error);
    static capture(error: any): void;
    static onBeforeSend(callback: any): void;
}
