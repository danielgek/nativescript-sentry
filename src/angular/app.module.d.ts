import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { SentryErrorHandler } from './error.handler';
export interface SentryConfig {
  dsn: string;
}
export declare const SentryService: InjectionToken<SentryConfig>;
export declare class SentryModule {
  static forRoot(config: SentryConfig): ModuleWithProviders;
}
export declare function provideSentryServiceOptions(config: SentryConfig): SentryErrorHandler;
