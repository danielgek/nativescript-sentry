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
Sentry.init(dsn);
```

### With Angular

```typescript
import { SentryModule } from 'nativescript-sentry/angular';

NgModule({
  ...
  imports: [
       SentryModule.forRoot({dsn: 'https://<key>:<secret>@host/<project>'})
  ],

```

**Note:** this plugin adds a custom ErrorHandler and automatically provides it

## API

### Init Sentry

```typescript
Sentry.init(dsn: string);
```

### Capture Exception

```typescript
Sentry.captureException(exeption: Error, options?: ExceptionOptions);
```

Example:

```typescript
try {
  throw 'try catch Exception example';
} catch (error) {
  Sentry.captureException(error, {});
}
```

### Capture Message

```typescript
Sentry.captureMessage(message: string, options?: MessageOptions)
```

### Capture BreadCrumb

```typescript
Sentry.captureBreadcrumb(breadcrumb: BreadCrumb)
```

### Set Context user

```typescript
Sentry.setContextUser(user: SentryUser)
```

### Context Tags

```typescript
Sentry.setContextTags(tags: object)
```

### Context Extra

```typescript
Sentry.setContextExtra(extra: object)
```

### Clear context

```typescript
Sentry.clearContext();
```

### Next features:

- callback for events

### Changelog:

**28/11/2018 - (1.8.0):**

- back to native approach
- update dependencies
- update test app
- native breadcrums for ios
- fix dsn init: credits:

**11/12/2017 - (1.5.0):**

**BREAKING CHANGES**

- `capture()` method was deprecated in favor of `captureMessage`/`captureException`

**Features**

- Moving to an hybrid approach with both clients(web/native)
- breadcrums
- tags
- user info
- set tags and extra for each event

**28-08-2017 - (1.3.0):**

- fix Aot compilation for angular apps
- fix typos thanks to @muratcorlu

**2-08-2017 - (1.2.0):**

- update demos dependencies
- update ios and android native dependencies
- fix ios event capture

**24-07-2017 - (1.1.0):**

- fix stringify
- fix angular error handler

## Credits:

- **@hypery2k**: for his **nativescript-fabric**(helped me a lot!)
