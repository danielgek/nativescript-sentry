import { Common } from './sentry.common';
export declare class Sentry extends Common {
    private static getErrorDetails(args);
    static init(dsn: string): void;
    static capture(error: any): void;
}
