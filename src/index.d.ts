import { Common } from './sentry.common';
export declare class Sentry extends Common {
    static init(dsn: string);
    static capture(error: any);
}
