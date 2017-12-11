import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Sentry, SentryBreadcrumb, SentrySeverity } from "nativescript-sentry";
import * as utils from 'utils/utils';
@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit() {
        // Sentry.onBeforeSend((event) => {
        // event.tags = NSDictionary.alloc<string, string>().initWithObjectsForKeys(
        //     utils.ios.collections.jsArrayToNSArray(['true', 'true']) as NSArray<string>,
        //     utils.ios.collections.jsArrayToNSArray(['tag1', 'tag2']) as NSArray<string>
        // );
        // console.log('passei no componente antes de enviar o evento');
        // setTimeout(() => {
        //     console.log('vou returnar true no component');
        //     return true;
        // }, 3000);
        // });
        Sentry.setContextUser({
            email: 'daniel@fnaile.com',
            username: 'danielgek'
        });
        Sentry.setContextTags({
            tag1: 'value1',
            tag2: 'value2'
        });
        Sentry.setContextExtra({
            extra1: 'valuextra1',
            extra2: 'valuextra2'
        });
    }
    onTapTry(eventData) {
        try {
            throw 'try catch exeption example';
        } catch (error) {
            Sentry.captureException(error, {});
        }
    }

    onTapTryError(eventData) {
        try {
            throw new Error('try catch exeption example');
        } catch (error) {
            Sentry.captureException(error, {});
        }
    }

    onTapNative(eventData) {
        throw 'Test Sentry on Main thread';
    }

    onTapMessage() {
        Sentry.captureMessage('bazinga, you got a message', {});
    }
    onTapBreadcrumb() {
        const breadcrumb: SentryBreadcrumb = {
            message: 'bazinga, you got a breadcrumb message',
            category: 'breadcrumb category',
            data: {
                custom: 'value'
            }
        };
        Sentry.captureBreadcrumb(breadcrumb);
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
