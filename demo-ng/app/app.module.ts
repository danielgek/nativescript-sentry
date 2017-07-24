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
        AppRoutingModule,
        SentryModule.forRoot({ dsn: 'xvbdbg'})
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
