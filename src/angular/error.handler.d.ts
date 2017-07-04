import { ErrorHandler } from '@angular/core';
import { SentryConfig } from "./";
export declare class SentryErrorHandler extends ErrorHandler {
    constructor(config: SentryConfig);
    handleError(err: any): void;
}
