import { Common } from './sentry.common';
export declare class Sentry extends Common {
    static init(dns: string);
    static capture(error: any);
}
