import { ModuleWithProviders, InjectionToken } from '@angular/core';
export declare const SENTRY_CONFIG: InjectionToken<SentryConfig>;
export declare class SentryModule {
    constructor(config: SentryConfig);
    static forRoot(config: ISentryConfig): ModuleWithProviders;
}
export interface ISentryConfig {
    dsn: string;
}
export declare class SentryConfig implements ISentryConfig {
    dsn: string;
    constructor(config?: ISentryConfig);
}
export declare function provideConfig(config: ISentryConfig): SentryConfig;
