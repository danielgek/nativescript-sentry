/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './';
const STACKTRACE_REGX = /^\s*at (.*?) ?\(((?:file|https?|blob|ng|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\).*$/i;

export class Sentry {
  public static init(dsn: string) {
    // this is all the setup you need for android to handle uncaught exceptions
    // @link - https://forum.sentry.io/t/android-uncaught-exception/1764/2
    // @link - https://docs.sentry.io/clients/java/modules/android/#features
    io.sentry.Sentry.init(dsn);
    application.on(application.uncaughtErrorEvent, args => {
      try {
        if (args.android && args.android.nativeException.toString())
          this.captureException({
            message: 'E daqqqqqqiuiuiuiui' + args.android.message,
            stack: args.android.nativeException.toString(),
            name: null
          });
        else this.captureException(args);
      } catch (e) {
        console.log('[Sentry - iOS] Exeption on uncaughtErrorEvent: ', e);
      }
    });
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    const level = options && options.level ? options.level : null;

    let event = new io.sentry.event.EventBuilder().withMessage(message).withLevel(this._convertSentryEventLevel(level));

    if (options && options.extra) {
      Object.keys(options.extra).forEach(key => {
        // @link: https://github.com/danielgek/nativescript-sentry/issues/22
        const nativeDataValue = Sentry._convertDataTypeToJavaObject(options.extra[key]);
        event = event.withExtra(key, nativeDataValue);
      });
    }

    if (options && options.tags) {
      // tags are required as strings
      Object.keys(options.tags).forEach(key => {
        event.withTag(key, options.tags[key].toString());
      });
    }
    io.sentry.Sentry.getStoredClient().sendEvent(event);
  }

  public static captureException(exception: Error | NativeScriptError, options?: ExceptionOptions) {
    // TODO: attach tags and extra directly on the exeption
    if (options && options.extra) {
      this.setContextExtra(options.extra);
    }

    if (options && options.tags) {
      this.setContextTags(options.tags);
    }
    if (!exception.stack) {
      // TODO: error dont have a stacktrace
      return;
    }
    const parsedJSStackTrace = this._parseStackTrace(exception);

    const stackTraceInterface = new io.sentry.event.interfaces.StackTraceInterface(parsedJSStackTrace);
    const exceptions = new java.util.ArrayDeque();
    if ((exception as NativeScriptError).nativeError) {
      exceptions.push(
        new io.sentry.event.interfaces.SentryException(
          (exception as NativeScriptError).nativeError,
          '',
          '',
          stackTraceInterface
        )
      );
    } else {
      exceptions.push(new io.sentry.event.interfaces.SentryException(exception.message, '', '', stackTraceInterface));
    }

    const eventBuilder = new io.sentry.event.EventBuilder()
      .withMessage(exception.message)
      .withLevel(io.sentry.event.Event.Level.ERROR)
      .withSentryInterface(new io.sentry.event.interfaces.ExceptionInterface(exceptions))
      .build();
    io.sentry.Sentry.getStoredClient().sendEvent(eventBuilder);
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // create breadcrumb
    const breadcrumbNative = new io.sentry.event.BreadcrumbBuilder()
      .setLevel(this._convertSentryBreadcrumbLevel(breadcrumb.level)) // set the level
      .setCategory(breadcrumb.category) // set category
      .setMessage(breadcrumb.message); // set message

    // record breadcrumb
    io.sentry.Sentry.getStoredClient()
      .getContext()
      .recordBreadcrumb(breadcrumbNative.build());
  }

  public static setContextUser(user: SentryUser) {
    // handle the data object if provided
    let nativeMapObject: java.util.HashMap<any, any>;
    if (user.data) {
      nativeMapObject = new java.util.HashMap<any, any>();
      Object.keys(user.data).forEach(key => {
        // @link: https://github.com/danielgek/nativescript-sentry/issues/22
        const nativeDataValue = Sentry._convertDataTypeToJavaObject(user.data[key]);
        nativeMapObject.put(key, nativeDataValue);
      });
    }

    const userNative = new io.sentry.event.UserBuilder()
      .setId(user.id)
      .setEmail(user.email ? user.email : '')
      .setUsername(user.username ? user.username : '')
      .setData(nativeMapObject ? nativeMapObject : null)
      .build();

    io.sentry.Sentry.getStoredClient()
      .getContext()
      .setUser(userNative);
  }

  public static setContextTags(tags: object) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(tags).forEach(key => {
      sentryClient.addTag(key, tags[key].toString());
    });
  }

  public static setContextExtra(extra: object) {
    const sentryClient = io.sentry.Sentry.getStoredClient();
    Object.keys(extra).forEach(key => {
      // adding type check to not force toString on the extra
      // @link: https://github.com/danielgek/nativescript-sentry/issues/22
      const nativeDataValue = Sentry._convertDataTypeToJavaObject(extra[key]);
      sentryClient.addExtra(key, nativeDataValue);
    });
  }

  public static clearContext() {
    io.sentry.Sentry.getStoredClient().clearContext();
  }

  /**
   * Returns the android Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryBreadcrumbLevel(level: Level) {
    if (!level) {
      return io.sentry.event.Breadcrumb.Level.INFO;
    }

    switch (level) {
      case Level.Info:
        return io.sentry.event.Breadcrumb.Level.INFO;
      case Level.Warning:
        return io.sentry.event.Breadcrumb.Level.WARNING;
      case Level.Fatal:
        return io.sentry.event.Breadcrumb.Level.CRITICAL;
      case Level.Error:
        return io.sentry.event.Breadcrumb.Level.ERROR;
      case Level.Debug:
        return io.sentry.event.Breadcrumb.Level.DEBUG;
      default:
        return io.sentry.event.Breadcrumb.Level.INFO;
    }
  }

  private static _convertSentryEventLevel(level: Level) {
    if (!level) {
      return io.sentry.event.Event.Level.INFO;
    }

    switch (level) {
      case Level.Info:
        return io.sentry.event.Event.Level.INFO;
      case Level.Warning:
        return io.sentry.event.Event.Level.WARNING;
      case Level.Fatal:
        return io.sentry.event.Event.Level.FATAL;
      case Level.Error:
        return io.sentry.event.Event.Level.ERROR;
      case Level.Debug:
        return io.sentry.event.Event.Level.DEBUG;
      default:
        return io.sentry.event.Event.Level.INFO;
    }
  }

  /**
   * Takes the provided value and checks for boolean or number and creates a native data type instance.
   * @param value
   */
  private static _convertDataTypeToJavaObject(value) {
    if (value === null) {
      return null;
    }

    switch (typeof value) {
      case 'object':
        if (value instanceof Date) {
          return new java.lang.String(value.toISOString());
        }

        if (Array.isArray(value)) {
          const nativeList = new java.util.ArrayList();
          value.forEach(data => {
            nativeList.add(this._convertDataTypeToJavaObject(data));
          });
          return nativeList;
        }

        const nativeObject = new java.util.HashMap();
        Object.keys(value).forEach(itemKey => {
          nativeObject.put(itemKey, this._convertDataTypeToJavaObject(value[itemKey]));
        });

        return nativeObject;
      case 'number':
        if (this._numberIs64Bit(value)) {
          if (this._numberHasDecimals(value)) {
            return new java.lang.Double(value);
          } else {
            return new java.lang.Long(value);
          }
        } else {
          if (this._numberHasDecimals(value)) {
            return new java.lang.Float(value);
          } else {
            return new java.lang.Integer(value);
          }
        }
      case 'boolean':
        return new java.lang.Boolean(value);
    }

    return new java.lang.String(value);
  }

  private static _numberHasDecimals(value: number) {
    return !(value % 1 === 0);
  }

  private static _numberIs64Bit(value: number) {
    return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
  }

  private static _parseStackTrace(error: Error) {
    const lines = error.stack.split('\n');
    let stackArray = new Array<io.sentry.event.interfaces.SentryStackTraceElement>();
    const elements = lines.reduce((stack, line) => {
      const frame = this._parseLine(line);

      if (frame) {
        stackArray.push(
          new io.sentry.event.interfaces.SentryStackTraceElement(
            '',
            frame.methodName,
            frame.file,
            frame.lineNumber,
            new java.lang.Integer(frame.column),
            frame.file,
            'javascript',
            null
          )
        );
      }

      return stack;
    }, stackArray);

    const synthStackTrace = Array.create(io.sentry.event.interfaces.SentryStackTraceElement, elements.length);
    elements.forEach((el, index) => {
      synthStackTrace[index] = el;
    });
    return synthStackTrace;
  }

  private static _parseLine(line: string) {
    const parts = STACKTRACE_REGX.exec(line);

    if (!parts) {
      return null;
    }
    return {
      file: parts[2] || null,
      methodName: parts[1],
      lineNumber: +parts[3] || null,
      column: +parts[4] || null
    };
  }

  private static nativeCrash() {
    throw new java.lang.Exception('Native exeption');
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
