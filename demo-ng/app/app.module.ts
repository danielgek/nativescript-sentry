import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { SentryModule } from 'nativescript-sentry/angular';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        SentryModule.forRoot({ dsn: 'https://58d98e428d6746998c1898bdf129533a:5a2b4c3bfdbd4656b8777b1b271343a9@watson.mysns.pt/4'})
    ],
    declarations: [
        AppComponent,
    ],
    providers: [ ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
