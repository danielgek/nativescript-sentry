import { Sentry, BreadCrumb, Level } from 'nativescript-sentry';
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
    throw new Error('Oh No! Something went wrong.');
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        exception: 17227,
        app_name: 'sentry-demo'
      },
      extra: {
        number_extra: 1,
        bool_extra: true,
        string_extra: 'oh snap!'
      }
    });
  }
}

export function message() {
  Sentry.captureMessage('Sentry Test Message', {
    level: Level.Info,
    tags: {
      number: 3843,
      string: 'Message Tag'
    },
    extra: {
      string_extra: 'Bullseye',
      number_extra: 18291,
      bool_extra: false
    }
  });
}

export function onTapBreadcrumb() {
  try {
    const breadcrumb: BreadCrumb = {
      message: 'bazinga, you got a breadcrumb message',
      category: 'breadcrumb category',
      level: Level.Info
    };
    Sentry.captureBreadcrumb(breadcrumb);
  } catch (error) {
    console.log('app error', error);
  }
}
