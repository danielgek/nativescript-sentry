import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Sentry } from "nativescript-sentry";
import * as utils from 'utils/utils';
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    onTapTry(eventData) {
        try {
            throw 'try catch exeption example';
        } catch (error) {
            Sentry.capture(error);
        }
    }

    onTapTryError(eventData) {
        try {
            throw new Error('try catch exeption example');
        } catch (error) {
            Sentry.capture(error);
        }
    }

    onTapMain(eventData) {
        throw 'Test Sentry on Main thread';
    }
}
