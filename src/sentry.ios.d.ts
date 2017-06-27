import { Common } from './sentry.common';
export declare class Sentry extends Common {
    static init(dsn: string): void;
    static capture(error: any): void;
}
