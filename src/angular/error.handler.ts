import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Sentry } from '../';
import { SentryService } from './app.module';

@Injectable()
export class SentryErrorHandler extends ErrorHandler {
  private _discardUncaughtJsExceptions: boolean = false;

  constructor(@Inject(SentryService) private config) {
    super();
    this._setDSN();
    this._setDiscardUncaughtJsExceptions();
  }

  handleError(err): void {
    try {
      if (err instanceof Error) {
        Sentry.captureException(err);
      } else {
        Sentry.captureException(new Error(err));
      }
    } catch (e) {
      console.log('[NativeScript-Sentry - SentryErrorHandler]', e);
    }

    if (this._discardUncaughtJsExceptions) return;
    throw err;
  }

  /*
   * Private
   */

  private _setDSN() {
    if (this.config && this.config.dsn) {
      Sentry.init(this.config.dsn);
    } else {
      throw '[SentryAngular]: You need to provide your dsn on the forRoot method';
    }
  }

  private _setDiscardUncaughtJsExceptions() {
    try {
      const packageJSON = require('~/package.json');
      if (packageJSON && packageJSON.discardUncaughtJsExceptions) {
        this._discardUncaughtJsExceptions = packageJSON.discardUncaughtJsExceptions;
      }
    } catch (e) {}
  }
}
