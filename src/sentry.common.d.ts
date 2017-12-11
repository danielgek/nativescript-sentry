import { Observable } from 'tns-core-modules/data/observable';
import { SentryUser } from './';
export declare class Common extends Observable {
    constructor();
    private static urlencode(obj);
    protected static _init(dsn: string, config?: any): void;
    protected static _setUser(user: SentryUser): void;
    protected static _setTags(tags: any): void;
    protected static _setExtra(extra: any): void;
    protected static _clearContext(): void;
    protected static _captureMessage(message: string, options: any): void;
    protected static _captureException(exception: Error, options: any): void;
    protected static _captureBreadcrumb(breadcrumb: any): void;
}
