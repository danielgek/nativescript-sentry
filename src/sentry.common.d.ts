import { Observable } from 'tns-core-modules/data/observable';
export declare class Common extends Observable {
    debug: boolean;
    constructor();
    enableDebug(): void;
    disableDebug(): void;
    log(message: string, error: any): void;
}
