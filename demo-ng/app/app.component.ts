import { Component, OnInit } from '@angular/core';
import { Sentry, BreadCrumb, Level } from 'nativescript-sentry';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public user_email = 'test@sentry-test.io';

  ngOnInit() {
    Sentry.setContextTags({
      tag1: 'value1',
      tag2: 'value2'
    });
    Sentry.setContextExtra({
      extra1: 'valuextra1',
      extra2: 'valuextra2'
    });
  }

  setSentryUser() {
    Sentry.setContextUser({
      id: '1',
      email: this.user_email,
      data: {
        bool_value: false,
        string_value: 'test string',
        number_value: 35,
        created: {
          date: 'January 1, 1999',
          picture_url: 'https://docs.sentry.io/'
        }
      }
    });
  }

  onTapNative() {
    throw 'Uncaught Error Exception thrown inside NativeScript app.';
  }

  onTapTry() {
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

  onTapTryError() {
    try {
      throw new Error('Oh No! Something went wrong.');
    } catch (error) {
      Sentry.captureException(error, {
        tags: {
          exception: 18219,
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

  onTapMessage() {
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

  onTapBreadcrumb() {
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

  onTapCaptureWithExtras() {
    try {
      throw new Error('try catch exeption example');
    } catch (error) {
      Sentry.captureException(error, {
        tags: {
          tagevent: 'tageventvalue'
        },
        extra: {
          extraevent: 'extraeventvalue'
        }
      });
    }
  }
}
