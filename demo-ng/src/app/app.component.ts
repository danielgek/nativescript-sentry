import { Component } from "@angular/core";
import { Sentry, BreadCrumb, Level } from "nativescript-sentry";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public user_email = "test@sentry-test.io";

  ngOnInit() {
    Sentry.setContextTags({
      tag1: "value1",
      tag2: "value2"
    });
    Sentry.setContextExtra({
      extra1: "valuextra1",
      extra2: "valuextra2"
    });
  }

  setSentryUser() {
    Sentry.setContextUser({
      id: "1",
      email: this.user_email,
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

  onTapNative() {
    // TODO: add sentry native crash
    Sentry.nativeCrash();
  }

  onTapTryThrow() {
    // TODO: this is catched two times because of herror handler
    throw "Oh No! Something went wrong! (throw)";
  }

  onTapTryError() {
      throw new Error("Oh No! Something went wrong! throwing (new Error)");
  
  }

  onTapMessage() {
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

  onTapBreadcrumb() {
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

  onTapCaptureWithExtras() {
    try {
      throw new Error("try catch exeption with extras");
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
}
