import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { Sentry } from 'nativescript-sentry';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}


export function onTapTry(eventData) {
    try {
        throw 'try catch exeption example'
    } catch (error) {
        Sentry.capture(error);
    }
}

export function onTapMain(eventData) {
    throw 'Test Sentry on Main thread'
}