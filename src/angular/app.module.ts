import { 
    NgModule,
    ErrorHandler,
    ModuleWithProviders,
    Provider,
    Optional,
    NO_ERRORS_SCHEMA,
    Inject,
    InjectionToken,
    SkipSelf,
    Injectable
} from '@angular/core';

import { Sentry } from '../';
import { SentryErrorHandler } from './error.handler';
export const SENTRY_CONFIG = new InjectionToken<SentryConfig>('SENTRY_CONFIG');


export class SentryConfig { dsn = ''; }

@Injectable()
export class SentryService {
    dsn: string;
    constructor( @Optional() config: SentryConfig) {
        if (config) { this.dsn = config.dsn; }
    }
}

@NgModule({
    declarations: [],
    providers: [ SentryConfig ],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SentryModule {

    constructor( config: SentryConfig) {
        if (config && config.dsn) {
            Sentry.init(config.dsn, null);
        } else {
            console.error('You need to provide a dsn on the forRoot method');
        }
    }

    static forRoot(config: SentryConfig): ModuleWithProviders {
        return {
            ngModule: SentryModule,
            providers: [
                { provide: SentryConfig, useValue: config },
                { provide: ErrorHandler, useClass: SentryErrorHandler },
            ]
        };
    }
}