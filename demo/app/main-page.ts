import { Sentry, BreadCrumb, Level } from "nativescript-sentry";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

let obsData: Observable;
const USER_EMAIL = "USER_EMAIL";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = args.object as Page;
  obsData = new Observable();
  obsData.set("user_email", "test@sentry-test.io");
  page.bindingContext = obsData;
}

export function setSentryUser() {
  Sentry.setContextUser({
    id: "19210029akd01jjd9102",
    email: obsData.get("user_email"),
    data: {
      bool_value: false,
      string_value: "test string",
      number_value: 35,
      created: {
        date: "January 1, 1999",
        picture_url: "https://docs.sentry.io/"
      }
    }
  });
}

export function onTapNative() {
  throw "Uncaught Error Exception thrown inside NativeScript app.";
}

export function onTapTryError() {
  try {
    throw new Error("Oh No! Something went wrong.");
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        exception: 17227,
        app_name: "sentry-demo"
      },
      extra: {
        number_extra: 1,
        bool_extra: true,
        string_extra: "oh snap!"
      }
    });
  }
}

export function onTapMessage() {
  Sentry.captureMessage("Sentry Test Message", {
    level: Level.Info,
    tags: {
      number: 3843,
      string: "Message Tag"
    },
    extra: {
      string_extra: "Bullseye",
      number_extra: 18291,
      bool_extra: false
    }
  });
}

export function onTapBreadcrumb() {
  try {
    const breadcrumb: BreadCrumb = {
      message: "bazinga, you got a breadcrumb message",
      category: "breadcrumb category",
      level: Level.Info
    };
    Sentry.captureBreadcrumb(breadcrumb);
  } catch (error) {
    console.log("app error", error);
  }
}
