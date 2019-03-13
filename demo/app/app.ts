/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from "tns-core-modules/application";
import { Sentry } from "nativescript-sentry";

const dsn = "https://7036d7ab6de342dea0e048fece7e338e@sentry.io/1314171";
Sentry.init(dsn);

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
