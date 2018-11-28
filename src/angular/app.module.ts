import {
  ErrorHandler,
  Injectable,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  NO_ERRORS_SCHEMA,
  Optional
} from '@angular/core';
import { Sentry } from '../';
import { SentryErrorHandler } from './error.handler';

export interface SentryConfig {
  dsn: string;
}

export const SentryService = new InjectionToken<SentryConfig>('SentryConfig');

@NgModule()
export class SentryModule {
  static forRoot(config: SentryConfig): ModuleWithProviders {
    return {
      ngModule: SentryModule,
      providers: [{ provide: SentryService, useValue: config }, { provide: ErrorHandler, useClass: SentryErrorHandler }]
    };
  }
}
