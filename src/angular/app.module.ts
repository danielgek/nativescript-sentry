import { NgModule, ErrorHandler, ModuleWithProviders, Provider, Optional, NO_ERRORS_SCHEMA } from '@angular/core';

import { Sentry } from '../';
import { SentryErrorHandler } from './error.handler';

@NgModule({
    declarations: [],
    providers: [],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SentryModule {
    
    constructor(@Optional() config: SentryConfig) {
        if (config && config.dsn) {
            Sentry.init(config.dsn);
        } else {
            console.error('You need to provide a dsn on the forRoot method');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SentryModule,
            providers: [
                { provide: ErrorHandler, useClass: SentryErrorHandler }
            ]
        };
    }
}

export interface SentryConfig {
    dsn: string;
}