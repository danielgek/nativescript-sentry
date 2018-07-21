import { Sentry } from 'nativescript-sentry';
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = args.object as Page;
  page.bindingContext = new HelloWorldModel();
}

export function onTapMain(eventData) {
  throw 'Uncaught Error Exception thrown inside NativeScript app.';
}

export function onTapTry(eventData) {
  try {
    throw new Error('Not good');
  } catch (error) {
    Sentry.captureException(error, {});
  }
}
