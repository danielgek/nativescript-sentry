import { ErrorHandler, Inject } from '@angular/core';
import { Sentry } from '../';
import { SentryConfig } from "./";

export class SentryErrorHandler extends ErrorHandler {
    constructor() {
        super(false);
    }

    handleError(err): void {
        // super.handleError(err);
        console.log('passei no handler de angular');
        try {
            Sentry.captureException(err, null);
        } catch (e) {
            console.log('[Sentry - SentryErrorHandler]', e);
        }
        throw err;
    }
}