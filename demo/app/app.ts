import * as application from 'tns-core-modules/application';
import { Sentry } from 'nativescript-sentry';
const dsn = 'https://6073dd1015a344ce9028507b5c7abd34:4770c1cecb904a568c85f1682c87fc83@watson.mysns.pt/3';
Sentry.init(dsn);
application.start({ moduleName: "main-page" });

