import { ErrorHandler, Injectable, Inject } from '@angular/core';
import { Sentry } from '../';
import { SentryService, SentryModule } from './app.module';

@Injectable()
export class SentryErrorHandler extends ErrorHandler {
  constructor(@Inject(SentryService) private config) {
    super();
    if (config && config.dsn) {
      Sentry.init(config.dsn);
    } else {
      throw '[SentryAngular]: You need to provide your dsn on the forRoot method';
    }
  }

  handleError(err): void {
    try {
      Sentry.captureException(err, null);
    } catch (e) {
      console.log('[NativeScript-Sentry - SentryErrorHandler]', e);
    }
    throw err;
  }
}
