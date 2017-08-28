import { ModuleWithProviders, InjectionToken } from '@angular/core';
export declare const SENTRY_CONFIG: InjectionToken<SentryConfig>;
export declare class SentryConfig {
    dsn: string;
}
export declare class SentryService {
    dsn: string;
    constructor(config: SentryConfig);
}
export declare class SentryModule {
    constructor(config: SentryConfig);
    static forRoot(config: SentryConfig): ModuleWithProviders;
}
