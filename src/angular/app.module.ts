import { 
    NgModule,
    ErrorHandler,
    ModuleWithProviders,
    Provider,
    Optional,
    NO_ERRORS_SCHEMA,
    Inject,
    InjectionToken,
    SkipSelf
} from '@angular/core';

import { Sentry } from '../';
import { SentryErrorHandler } from './error.handler';
export const SENTRY_CONFIG = new InjectionToken<SentryConfig>('SENTRY_CONFIG');

@NgModule({
    declarations: [],
    providers: [],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SentryModule {
    
    constructor( @Optional() @SkipSelf() config: SentryConfig) {
        console.log('config here')
        // console.dir(config);
        // if (config && config.dsn) {
        //     Sentry.init(config.dsn);
        // } else {
        //     console.error('You need to provide a dsn on the forRoot method');
        // }
        console.log('constructor');
    }

    static forRoot(config: ISentryConfig): ModuleWithProviders {
        console.log('forroot')
        return {
            ngModule: SentryModule,
            providers: [
                { provide: SentryConfig, useValue: config },
                //{ provide: SentryConfig, useFactory: provideConfig, deps: [ SENTRY_CONFIG ] },
                { provide: ErrorHandler, useClass: SentryErrorHandler },
            ]
        };
    }
}

export interface ISentryConfig {
    dsn: string;
}
export class SentryConfig implements ISentryConfig {
    dsn = '';
    constructor(config?: ISentryConfig) {
        console.log('SentryConfig');
        if (config.dsn) {
            this.dsn = config.dsn;
        }
    }
}


export function provideConfig(config: ISentryConfig): SentryConfig {
    console.log('provideConfig')
    return new SentryConfig(config);
}