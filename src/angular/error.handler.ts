import { ErrorHandler } from '@angular/core';
import { Sentry } from '../';

export class SentryErrorHandler extends ErrorHandler {
    constructor() {
        super(false);
    }
    
    handleError(err: any): void {
        super.handleError(err);
        try {
            Sentry.capture(err);
        } catch (e) { }
    }
}