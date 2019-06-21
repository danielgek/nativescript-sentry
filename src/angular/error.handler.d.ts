import { ErrorHandler } from '@angular/core';
export declare class SentryErrorHandler extends ErrorHandler {
  private config;
  constructor(config: any);
  handleError(err: any): void;
}
