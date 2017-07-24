import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    onTapTry(eventData) {
        try {
            throw 'try catch exeption example'
        } catch (error) {
            console.log('Exeption')
            console.log(error);
        }
    }

    onTapMain(eventData) {
        throw 'Test Sentry on Main thread'
    }
}
