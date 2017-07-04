import { ErrorHandler, Inject } from '@angular/core';
import { Sentry } from '../';
import { SentryConfig } from "./";

export class SentryErrorHandler extends ErrorHandler {
    constructor() {
        console.log('ErrorHandler')
        super(false);
    }
    
    handleError(err: any): void {
        super.handleError(err);
        try {
            Sentry.capture(err);
        } catch (e) { }
    }
}