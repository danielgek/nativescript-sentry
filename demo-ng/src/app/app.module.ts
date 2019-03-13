import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SentryModule } from "nativescript-sentry/angular";
import { AppComponent } from "./app.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    SentryModule.forRoot({
      dsn: "https://10b5f0389dfe422cb6127e67c4af05e9@sentry.io/1320301"
    })
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
