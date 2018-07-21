import { Sentry } from 'nativescript-sentry';
import * as application from 'tns-core-modules/application';
// const dsn = 'https://6073dd1015a344ce9028507b5c7abd34:4770c1cecb904a568c85f1682c87fc83@watson.mysns.pt/3';
const sentryDsn = 'https://aaa25eb556fa476a92e0edea6dd57af6:65c984b9260e47f0bb128def7eddd5f4@sentry.io/306438';

Sentry.init(sentryDsn);
application.start({ moduleName: 'main-page' });
