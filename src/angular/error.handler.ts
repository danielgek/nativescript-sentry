import { ErrorHandler } from '@angular/core';
import { Sentry } from '../';

export class SentryErrorHandler extends ErrorHandler {
  constructor() {
    super(false);
  }

  handleError(err): void {
    try {
      Sentry.captureException(err, null);
    } catch (e) {
      console.log('[Sentry - SentryErrorHandler]', e);
    }
    throw err;
  }
}
