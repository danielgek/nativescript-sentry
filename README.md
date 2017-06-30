# Sentry.io for nativescript

This plugin uses sentry-android and sentry-cocoa to catch native errors/stack traces and send them to a sentry server.

**NOTE:** If you have a **native exeption** and the app exits the plugin will save the log and send it in the **next app startup**, this is how the native plugins are implemented and it is expected behavior

## Installation

```javascript
tns plugin add nativescript-sentry
```

## Usage 

### Without Angular
```typescript
import { Sentry } from 'nativescript-sentry';
const dsn = 'https://<key>:<secret>@host/<project>';
Sentry.init(dns);
```
### With Angular
```typescript
import { SentryModule } from 'nativescript-sentry';

NgModule({
  ...
  imports: [
       SentryModule.forRoot({dns: 'https://<key>:<secret>@host/<project>'})
  ],

```

## API

### Init Raven

`Sentry.init(dsn: string);`

### Capture exeption

`Sentry.capture(error: any);`

Example: 
```
try {
    throw 'try catch exeption example'
} catch(error) { 
    Sentry.capture(error);
}
```


