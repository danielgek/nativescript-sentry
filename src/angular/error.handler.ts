import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Sentry } from '../';
import { SentryService } from './app.module';

@Injectable()
export class SentryErrorHandler extends ErrorHandler {
  constructor(@Inject(SentryService) private config) {
    super();
    if (this.config && this.config.dsn) {
      Sentry.init(this.config.dsn);
    } else {
      throw '[SentryAngular]: You need to provide your dsn on the forRoot method';
    }
  }

  handleError(err): void {
    try {
      Sentry.captureException(err);
    } catch (e) {
      console.log('[NativeScript-Sentry - SentryErrorHandler]', e);
    }
    throw err;
  }
}
