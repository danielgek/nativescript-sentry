declare module io {
  export module sentry {
    export class DefaultSentryClientFactory extends io.sentry.SentryClientFactory {
      public static class: java.lang.Class<io.sentry.DefaultSentryClientFactory>;
      public static NAIVE_PROTOCOL: string;
      public static COMPRESSION_OPTION: string;
      public static MAX_MESSAGE_LENGTH_OPTION: string;
      public static CONNECTION_TIMEOUT_OPTION: string;
      public static CONNECTION_TIMEOUT_DEFAULT: number;
      public static READ_TIMEOUT_OPTION: string;
      public static READ_TIMEOUT_DEFAULT: number;
      public static BUFFER_ENABLED_OPTION: string;
      public static BUFFER_ENABLED_DEFAULT: boolean;
      public static BUFFER_DIR_OPTION: string;
      public static BUFFER_SIZE_OPTION: string;
      public static BUFFER_SIZE_DEFAULT: number;
      public static BUFFER_FLUSHTIME_OPTION: string;
      public static BUFFER_FLUSHTIME_DEFAULT: number;
      public static BUFFER_GRACEFUL_SHUTDOWN_OPTION: string;
      public static BUFFER_SHUTDOWN_TIMEOUT_OPTION: string;
      public static BUFFER_SHUTDOWN_TIMEOUT_DEFAULT: number;
      public static ASYNC_OPTION: string;
      public static ASYNC_GRACEFUL_SHUTDOWN_OPTION: string;
      public static ASYNC_THREADS_OPTION: string;
      public static ASYNC_PRIORITY_OPTION: string;
      public static ASYNC_QUEUE_SIZE_OPTION: string;
      public static ASYNC_QUEUE_OVERFLOW_OPTION: string;
      public static ASYNC_QUEUE_DISCARDOLD: string;
      public static ASYNC_QUEUE_DISCARDNEW: string;
      public static ASYNC_QUEUE_SYNC: string;
      public static ASYNC_QUEUE_OVERFLOW_DEFAULT: string;
      public static ASYNC_SHUTDOWN_TIMEOUT_OPTION: string;
      public static ASYNC_SHUTDOWN_TIMEOUT_DEFAULT: number;
      public static IN_APP_FRAMES_OPTION: string;
      public static HIDE_COMMON_FRAMES_OPTION: string;
      public static SAMPLE_RATE_OPTION: string;
      public static HTTP_PROXY_HOST_OPTION: string;
      public static HTTP_PROXY_PORT_OPTION: string;
      public static HTTP_PROXY_USER_OPTION: string;
      public static HTTP_PROXY_PASS_OPTION: string;
      public static QUEUE_SIZE_DEFAULT: number;
      public static HTTP_PROXY_PORT_DEFAULT: number;
      public static RELEASE_OPTION: string;
      public static DIST_OPTION: string;
      public static ENVIRONMENT_OPTION: string;
      public static SERVERNAME_OPTION: string;
      public static TAGS_OPTION: string;
      public static EXTRATAGS_OPTION: string;
      public static MDCTAGS_OPTION: string;
      public static EXTRA_OPTION: string;
      public static UNCAUGHT_HANDLER_ENABLED_OPTION: string;
      public getRejectedExecutionHandler(param0: io.sentry.dsn.Dsn): java.util.concurrent.RejectedExecutionHandler;
      public getBufferedConnectionGracefulShutdownEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getUncaughtHandlerEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getProxyPort(param0: io.sentry.dsn.Dsn): number;
      public getRelease(param0: io.sentry.dsn.Dsn): string;
      public getAsyncPriority(param0: io.sentry.dsn.Dsn): number;
      public getReadTimeout(param0: io.sentry.dsn.Dsn): number;
      public getBuffer(param0: io.sentry.dsn.Dsn): io.sentry.buffer.Buffer;
      public getBufferSize(param0: io.sentry.dsn.Dsn): number;
      public createJsonMarshaller(param0: number): io.sentry.marshaller.json.JsonMarshaller;
      public createMarshaller(param0: io.sentry.dsn.Dsn): io.sentry.marshaller.Marshaller;
      public getBufferedConnectionShutdownTimeout(param0: io.sentry.dsn.Dsn): number;
      public getServerName(param0: io.sentry.dsn.Dsn): string;
      public getTags(param0: io.sentry.dsn.Dsn): java.util.Map<string, string>;
      /** @deprecated */
      public getExtraTags(param0: io.sentry.dsn.Dsn): java.util.Set<string>;
      public createStdOutConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
      public getAsyncEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getBufferEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getAsyncThreads(param0: io.sentry.dsn.Dsn): number;
      public getExtra(param0: io.sentry.dsn.Dsn): java.util.Map<string, string>;
      public getAsyncGracefulShutdownEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getProxyHost(param0: io.sentry.dsn.Dsn): string;
      public getHideCommonFramesEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getBypassSecurityEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public getAsyncShutdownTimeout(param0: io.sentry.dsn.Dsn): number;
      public getSampleRate(param0: io.sentry.dsn.Dsn): java.lang.Double;
      public getCompressionEnabled(param0: io.sentry.dsn.Dsn): boolean;
      public constructor();
      public createSentryClient(param0: io.sentry.dsn.Dsn): io.sentry.SentryClient;
      public getAsyncQueueSize(param0: io.sentry.dsn.Dsn): number;
      public getContextManager(param0: io.sentry.dsn.Dsn): io.sentry.context.ContextManager;
      public getProxyUser(param0: io.sentry.dsn.Dsn): string;
      public getTimeout(param0: io.sentry.dsn.Dsn): number;
      public createAsyncConnection(
        param0: io.sentry.dsn.Dsn,
        param1: io.sentry.connection.Connection
      ): io.sentry.connection.Connection;
      public createHttpConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
      public getProxyPass(param0: io.sentry.dsn.Dsn): string;
      public createConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
      public getDist(param0: io.sentry.dsn.Dsn): string;
      public getMdcTags(param0: io.sentry.dsn.Dsn): java.util.Set<string>;
      public configureSentryClient(param0: io.sentry.SentryClient, param1: io.sentry.dsn.Dsn): io.sentry.SentryClient;
      public getEnvironment(param0: io.sentry.dsn.Dsn): string;
      public getInAppFrames(param0: io.sentry.dsn.Dsn): java.util.Collection<string>;
      public getBufferFlushtime(param0: io.sentry.dsn.Dsn): number;
      public getMaxMessageLength(param0: io.sentry.dsn.Dsn): number;
    }
    export module DefaultSentryClientFactory {
      export class DaemonThreadFactory {
        public static class: java.lang.Class<io.sentry.DefaultSentryClientFactory.DaemonThreadFactory>;
        public newThread(param0: java.lang.Runnable): java.lang.Thread;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class Sentry {
      public static class: java.lang.Class<io.sentry.Sentry>;
      public static setStoredClient(param0: io.sentry.SentryClient): void;
      public static capture(param0: io.sentry.event.Event): void;
      public static init(): io.sentry.SentryClient;
      public static capture(param0: io.sentry.event.EventBuilder): void;
      public static getContext(): io.sentry.context.Context;
      public static capture(param0: string): void;
      /** @deprecated */
      public static record(param0: io.sentry.event.Breadcrumb): void;
      public static init(param0: string, param1: io.sentry.SentryClientFactory): io.sentry.SentryClient;
      public static close(): void;
      public static clearContext(): void;
      public static init(param0: io.sentry.SentryClientFactory): io.sentry.SentryClient;
      public static getStoredClient(): io.sentry.SentryClient;
      public static capture(param0: java.lang.Throwable): void;
      public static init(param0: string): io.sentry.SentryClient;
      /** @deprecated */
      public static setUser(param0: io.sentry.event.User): void;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryClient {
      public static class: java.lang.Class<io.sentry.SentryClient>;
      public release: string;
      public dist: string;
      public environment: string;
      public serverName: string;
      public tags: java.util.Map<string, string>;
      public mdcTags: java.util.Set<string>;
      public extra: java.util.Map<string, any>;
      public setTags(param0: java.util.Map<string, string>): void;
      public addMdcTag(param0: string): void;
      public getExtra(): java.util.Map<string, any>;
      public sendEvent(param0: io.sentry.event.EventBuilder): void;
      public constructor(param0: io.sentry.connection.Connection, param1: io.sentry.context.ContextManager);
      public setServerName(param0: string): void;
      public addExtra(param0: string, param1: any): void;
      public setExtra(param0: java.util.Map<string, any>): void;
      public addTag(param0: string, param1: string): void;
      public getMdcTags(): java.util.Set<string>;
      /** @deprecated */
      public addExtraTag(param0: string): void;
      public getRelease(): string;
      public addBuilderHelper(param0: io.sentry.event.helper.EventBuilderHelper): void;
      public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
      public getTags(): java.util.Map<string, string>;
      public setMdcTags(param0: java.util.Set<string>): void;
      public getEnvironment(): string;
      public setDist(param0: string): void;
      public getBuilderHelpers(): java.util.List<io.sentry.event.helper.EventBuilderHelper>;
      /** @deprecated */
      public setExtraTags(param0: java.util.Set<string>): void;
      public addShouldSendEventCallback(param0: io.sentry.event.helper.ShouldSendEventCallback): void;
      public closeConnection(): void;
      public sendEvent(param0: io.sentry.event.Event): void;
      public sendMessage(param0: string): void;
      public getContext(): io.sentry.context.Context;
      public runBuilderHelpers(param0: io.sentry.event.EventBuilder): void;
      public getDist(): string;
      public sendException(param0: java.lang.Throwable): void;
      public removeBuilderHelper(param0: io.sentry.event.helper.EventBuilderHelper): void;
      public clearContext(): void;
      public toString(): string;
      public setEnvironment(param0: string): void;
      public setRelease(param0: string): void;
      public setupUncaughtExceptionHandler(): void;
      public getServerName(): string;
    }
  }
}

declare module io {
  export module sentry {
    export abstract class SentryClientFactory {
      public static class: java.lang.Class<io.sentry.SentryClientFactory>;
      public static sentryClient(): io.sentry.SentryClient;
      public toString(): string;
      public static sentryClient(param0: string): io.sentry.SentryClient;
      public constructor();
      public static sentryClient(param0: string, param1: io.sentry.SentryClientFactory): io.sentry.SentryClient;
      public createSentryClient(param0: io.sentry.dsn.Dsn): io.sentry.SentryClient;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryUncaughtExceptionHandler {
      public static class: java.lang.Class<io.sentry.SentryUncaughtExceptionHandler>;
      public isEnabled(): java.lang.Boolean;
      public disable(): void;
      public constructor(param0: java.lang.Thread.UncaughtExceptionHandler);
      public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
      public static setup(): io.sentry.SentryUncaughtExceptionHandler;
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export class AndroidSentryClientFactory extends io.sentry.DefaultSentryClientFactory {
        public static class: java.lang.Class<io.sentry.android.AndroidSentryClientFactory>;
        public static TAG: string;
        public getBuffer(param0: io.sentry.dsn.Dsn): io.sentry.buffer.Buffer;
        public constructor(param0: globalAndroid.content.Context);
        public getInAppFrames(param0: io.sentry.dsn.Dsn): java.util.Collection<string>;
        public getContextManager(param0: io.sentry.dsn.Dsn): io.sentry.context.ContextManager;
        public createSentryClient(param0: io.sentry.dsn.Dsn): io.sentry.SentryClient;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module event {
        export module helper {
          export class AndroidEventBuilderHelper extends io.sentry.event.helper.EventBuilderHelper {
            public static class: java.lang.Class<io.sentry.android.event.helper.AndroidEventBuilderHelper>;
            public static TAG: string;
            public static isConnected(param0: globalAndroid.content.Context): boolean;
            public constructor(param0: globalAndroid.content.Context);
            public static isEmulator(): java.lang.Boolean;
            public static getBatteryLevel(param0: globalAndroid.content.Context): java.lang.Float;
            public static isExternalStorageMounted(): boolean;
            public static getApplicationName(param0: globalAndroid.content.Context): string;
            public static getProGuardUuids(param0: globalAndroid.content.Context): native.Array<string>;
            public static getOrientation(param0: globalAndroid.content.Context): string;
            public static isCharging(param0: globalAndroid.content.Context): java.lang.Boolean;
            public static getDisplayMetrics(param0: globalAndroid.content.Context): globalAndroid.util.DisplayMetrics;
            public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
            public getContexts(): java.util.Map<string, java.util.Map<string, any>>;
            public static isRooted(): java.lang.Boolean;
            public static getUnusedExternalStorage(): java.lang.Long;
            public static getMemInfo(
              param0: globalAndroid.content.Context
            ): globalAndroid.app.ActivityManager.MemoryInfo;
            public static stringifyDate(param0: java.util.Date): string;
            public static getTotalInternalStorage(): java.lang.Long;
            public static getTotalExternalStorage(): java.lang.Long;
            public static getKernelVersion(): string;
            public static getPackageInfo(param0: globalAndroid.content.Context): globalAndroid.content.pm.PackageInfo;
            public static getFamily(): string;
            public static getUnusedInternalStorage(): java.lang.Long;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module buffer {
      export class Buffer {
        public static class: java.lang.Class<io.sentry.buffer.Buffer>;
        /**
         * Constructs a new instance of the io.sentry.buffer.Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          add(param0: io.sentry.event.Event): void;
          discard(param0: io.sentry.event.Event): void;
          getEvents(): java.util.Iterator<io.sentry.event.Event>;
        });
        public constructor();
        public discard(param0: io.sentry.event.Event): void;
        public add(param0: io.sentry.event.Event): void;
        public getEvents(): java.util.Iterator<io.sentry.event.Event>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module buffer {
      export class DiskBuffer extends io.sentry.buffer.Buffer {
        public static class: java.lang.Class<io.sentry.buffer.DiskBuffer>;
        public static FILE_SUFFIX: string;
        public discard(param0: io.sentry.event.Event): void;
        public add(param0: io.sentry.event.Event): void;
        public constructor(param0: java.io.File, param1: number);
        public getEvents(): java.util.Iterator<io.sentry.event.Event>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class JndiLookup {
        public static class: java.lang.Class<io.sentry.config.JndiLookup>;
        public static jndiLookup(param0: string): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class Lookup {
        public static class: java.lang.Class<io.sentry.config.Lookup>;
        public static lookup(param0: string): string;
        public static lookup(param0: string, param1: io.sentry.dsn.Dsn): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export abstract class AbstractConnection extends io.sentry.connection.Connection {
        public static class: java.lang.Class<io.sentry.connection.AbstractConnection>;
        public static SENTRY_PROTOCOL_VERSION: string;
        public doSend(param0: io.sentry.event.Event): void;
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public getAuthHeader(): string;
        public constructor(param0: string, param1: string);
        public send(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class AsyncConnection extends io.sentry.connection.Connection {
        public static class: java.lang.Class<io.sentry.connection.AsyncConnection>;
        public close(): void;
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public constructor(
          param0: io.sentry.connection.Connection,
          param1: java.util.concurrent.ExecutorService,
          param2: boolean,
          param3: number
        );
        public send(param0: io.sentry.event.Event): void;
      }
      export module AsyncConnection {
        export class EventSubmitter {
          public static class: java.lang.Class<io.sentry.connection.AsyncConnection.EventSubmitter>;
          public run(): void;
        }
        export class ShutDownHook {
          public static class: java.lang.Class<io.sentry.connection.AsyncConnection.ShutDownHook>;
          public run(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class BufferedConnection extends io.sentry.connection.Connection {
        public static class: java.lang.Class<io.sentry.connection.BufferedConnection>;
        public close(): void;
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public wrapConnectionWithBufferWriter(param0: io.sentry.connection.Connection): io.sentry.connection.Connection;
        public constructor(
          param0: io.sentry.connection.Connection,
          param1: io.sentry.buffer.Buffer,
          param2: number,
          param3: boolean,
          param4: number
        );
        public send(param0: io.sentry.event.Event): void;
      }
      export module BufferedConnection {
        export class Flusher {
          public static class: java.lang.Class<io.sentry.connection.BufferedConnection.Flusher>;
          public run(): void;
        }
        export class ShutDownHook {
          public static class: java.lang.Class<io.sentry.connection.BufferedConnection.ShutDownHook>;
          public run(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class Connection {
        public static class: java.lang.Class<io.sentry.connection.Connection>;
        /**
         * Constructs a new instance of the io.sentry.connection.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          send(param0: io.sentry.event.Event): void;
          addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        });
        public constructor();
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public send(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class ConnectionException {
        public static class: java.lang.Class<io.sentry.connection.ConnectionException>;
        public constructor(
          param0: string,
          param1: java.lang.Throwable,
          param2: java.lang.Long,
          param3: java.lang.Integer
        );
        public constructor(param0: string, param1: java.lang.Throwable);
        public getRecommendedLockdownTime(): java.lang.Long;
        public getResponseCode(): java.lang.Integer;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class EventSampler {
        public static class: java.lang.Class<io.sentry.connection.EventSampler>;
        /**
         * Constructs a new instance of the io.sentry.connection.EventSampler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { shouldSendEvent(param0: io.sentry.event.Event): boolean });
        public constructor();
        public shouldSendEvent(param0: io.sentry.event.Event): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class EventSendCallback {
        public static class: java.lang.Class<io.sentry.connection.EventSendCallback>;
        /**
         * Constructs a new instance of the io.sentry.connection.EventSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          onFailure(param0: io.sentry.event.Event, param1: java.lang.Exception): void;
          onSuccess(param0: io.sentry.event.Event): void;
        });
        public constructor();
        public onFailure(param0: io.sentry.event.Event, param1: java.lang.Exception): void;
        public onSuccess(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class HttpConnection extends io.sentry.connection.AbstractConnection {
        public static class: java.lang.Class<io.sentry.connection.HttpConnection>;
        public static HTTP_TOO_MANY_REQUESTS: number;
        public doSend(param0: io.sentry.event.Event): void;
        public close(): void;
        public constructor(
          param0: java.net.URL,
          param1: string,
          param2: string,
          param3: java.net.Proxy,
          param4: io.sentry.connection.EventSampler
        );
        /** @deprecated */
        public setTimeout(param0: number): void;
        public setMarshaller(param0: io.sentry.marshaller.Marshaller): void;
        public setReadTimeout(param0: number): void;
        public setBypassSecurity(param0: boolean): void;
        public static getSentryApiUrl(param0: java.net.URI, param1: string): java.net.URL;
        public getConnection(): java.net.HttpURLConnection;
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public setConnectionTimeout(param0: number): void;
        public constructor(param0: string, param1: string);
        public send(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class LockdownManager {
        public static class: java.lang.Class<io.sentry.connection.LockdownManager>;
        public static DEFAULT_MAX_LOCKDOWN_TIME: number;
        public static DEFAULT_BASE_LOCKDOWN_TIME: number;
        public isLockedDown(): boolean;
        public unlock(): void;
        public lockdown(param0: io.sentry.connection.ConnectionException): boolean;
        public setMaxLockdownTime(param0: number): void;
        public constructor(param0: io.sentry.time.Clock);
        public constructor();
        public setBaseLockdownTime(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class LockedDownException {
        public static class: java.lang.Class<io.sentry.connection.LockedDownException>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class NoopConnection extends io.sentry.connection.AbstractConnection {
        public static class: java.lang.Class<io.sentry.connection.NoopConnection>;
        public doSend(param0: io.sentry.event.Event): void;
        public close(): void;
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public constructor(param0: string, param1: string);
        public constructor();
        public send(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class OutputStreamConnection extends io.sentry.connection.AbstractConnection {
        public static class: java.lang.Class<io.sentry.connection.OutputStreamConnection>;
        public doSend(param0: io.sentry.event.Event): void;
        public setMarshaller(param0: io.sentry.marshaller.Marshaller): void;
        public close(): void;
        public constructor(param0: java.io.OutputStream);
        public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
        public constructor(param0: string, param1: string);
        public send(param0: io.sentry.event.Event): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class ProxyAuthenticator {
        public static class: java.lang.Class<io.sentry.connection.ProxyAuthenticator>;
        public constructor(param0: string, param1: string);
        public getPasswordAuthentication(): java.net.PasswordAuthentication;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class RandomEventSampler extends io.sentry.connection.EventSampler {
        public static class: java.lang.Class<io.sentry.connection.RandomEventSampler>;
        public shouldSendEvent(param0: io.sentry.event.Event): boolean;
        public constructor(param0: number);
        public constructor(param0: number, param1: java.util.Random);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module connection {
      export class TooManyRequestsException extends io.sentry.connection.ConnectionException {
        public static class: java.lang.Class<io.sentry.connection.TooManyRequestsException>;
        public constructor(
          param0: string,
          param1: java.lang.Throwable,
          param2: java.lang.Long,
          param3: java.lang.Integer
        );
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module context {
      export class Context {
        public static class: java.lang.Class<io.sentry.context.Context>;
        public setHttp(param0: io.sentry.event.interfaces.HttpInterface): void;
        public getBreadcrumbs(): java.util.List<io.sentry.event.Breadcrumb>;
        public getHttp(): io.sentry.event.interfaces.HttpInterface;
        public clearTags(): void;
        public removeExtra(param0: string): void;
        public clearBreadcrumbs(): void;
        public getLastEventId(): java.util.UUID;
        public getUser(): io.sentry.event.User;
        public setLastEventId(param0: java.util.UUID): void;
        public addTag(param0: string, param1: string): void;
        public constructor();
        public getTags(): java.util.Map<string, string>;
        public getExtra(): java.util.Map<string, any>;
        public removeTag(param0: string): void;
        public addExtra(param0: string, param1: any): void;
        public clear(): void;
        public constructor(param0: number);
        public clearExtra(): void;
        public clearHttp(): void;
        public setUser(param0: io.sentry.event.User): void;
        public clearUser(): void;
        public recordBreadcrumb(param0: io.sentry.event.Breadcrumb): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module context {
      export class ContextManager {
        public static class: java.lang.Class<io.sentry.context.ContextManager>;
        /**
         * Constructs a new instance of the io.sentry.context.ContextManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getContext(): io.sentry.context.Context; clear(): void });
        public constructor();
        public getContext(): io.sentry.context.Context;
        public clear(): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module context {
      export class SingletonContextManager extends io.sentry.context.ContextManager {
        public static class: java.lang.Class<io.sentry.context.SingletonContextManager>;
        public getContext(): io.sentry.context.Context;
        public clear(): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module context {
      export class ThreadLocalContextManager extends io.sentry.context.ContextManager {
        public static class: java.lang.Class<io.sentry.context.ThreadLocalContextManager>;
        public getContext(): io.sentry.context.Context;
        public clear(): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module dsn {
      export class Dsn {
        public static class: java.lang.Class<io.sentry.dsn.Dsn>;
        public static DEFAULT_DSN: string;
        public getProtocolSettings(): java.util.Set<string>;
        public getPort(): number;
        public getUri(): java.net.URI;
        public getPublicKey(): string;
        public getPath(): string;
        public getOptions(): java.util.Map<string, string>;
        public toString(): string;
        public static dsnLookup(): string;
        public constructor(param0: string);
        public constructor(param0: java.net.URI);
        public getSecretKey(): string;
        public getHost(): string;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getProtocol(): string;
        public getProjectId(): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module dsn {
      export class InvalidDsnException {
        public static class: java.lang.Class<io.sentry.dsn.InvalidDsnException>;
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: java.lang.Throwable);
        public constructor(param0: string);
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module environment {
      export class SentryEnvironment {
        public static class: java.lang.Class<io.sentry.environment.SentryEnvironment>;
        public static SDK_NAME: string;
        public static SDK_VERSION: string;
        public static SENTRY_THREAD: java.lang.ThreadLocal<java.util.concurrent.atomic.AtomicInteger>;
        public static isManagingThread(): boolean;
        public static startManagingThread(): void;
        public static stopManagingThread(): void;
        public static getSentryName(): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module environment {
      export class Version {
        public static class: java.lang.Class<io.sentry.environment.Version>;
        public static SDK_VERSION: string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class Breadcrumb {
        public static class: java.lang.Class<io.sentry.event.Breadcrumb>;
        public getType(): io.sentry.event.Breadcrumb.Type;
        public getTimestamp(): java.util.Date;
        public getLevel(): io.sentry.event.Breadcrumb.Level;
        public getCategory(): string;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getMessage(): string;
        public getData(): java.util.Map<string, string>;
      }
      export module Breadcrumb {
        export class Level {
          public static class: java.lang.Class<io.sentry.event.Breadcrumb.Level>;
          public static DEBUG: io.sentry.event.Breadcrumb.Level;
          public static INFO: io.sentry.event.Breadcrumb.Level;
          public static WARNING: io.sentry.event.Breadcrumb.Level;
          public static ERROR: io.sentry.event.Breadcrumb.Level;
          public static CRITICAL: io.sentry.event.Breadcrumb.Level;
          public static valueOf(param0: string): io.sentry.event.Breadcrumb.Level;
          public getValue(): string;
          public static values(): native.Array<io.sentry.event.Breadcrumb.Level>;
        }
        export class Type {
          public static class: java.lang.Class<io.sentry.event.Breadcrumb.Type>;
          public static DEFAULT: io.sentry.event.Breadcrumb.Type;
          public static HTTP: io.sentry.event.Breadcrumb.Type;
          public static NAVIGATION: io.sentry.event.Breadcrumb.Type;
          public static USER: io.sentry.event.Breadcrumb.Type;
          public getValue(): string;
          public static values(): native.Array<io.sentry.event.Breadcrumb.Type>;
          public static valueOf(param0: string): io.sentry.event.Breadcrumb.Type;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class BreadcrumbBuilder {
        public static class: java.lang.Class<io.sentry.event.BreadcrumbBuilder>;
        public setLevel(param0: io.sentry.event.Breadcrumb.Level): io.sentry.event.BreadcrumbBuilder;
        public setData(param0: java.util.Map<string, string>): io.sentry.event.BreadcrumbBuilder;
        public setTimestamp(param0: java.util.Date): io.sentry.event.BreadcrumbBuilder;
        public build(): io.sentry.event.Breadcrumb;
        public setMessage(param0: string): io.sentry.event.BreadcrumbBuilder;
        public withData(param0: string, param1: string): io.sentry.event.BreadcrumbBuilder;
        public setType(param0: io.sentry.event.Breadcrumb.Type): io.sentry.event.BreadcrumbBuilder;
        public setCategory(param0: string): io.sentry.event.BreadcrumbBuilder;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class Event {
        public static class: java.lang.Class<io.sentry.event.Event>;
        public getLevel(): io.sentry.event.Event.Level;
        public getBreadcrumbs(): java.util.List<io.sentry.event.Breadcrumb>;
        public getServerName(): string;
        public setFingerprint(param0: java.util.List<string>): void;
        public getEnvironment(): string;
        public getExtra(): java.util.Map<string, any>;
        public getDist(): string;
        public hashCode(): number;
        public getId(): java.util.UUID;
        public equals(param0: any): boolean;
        public getMessage(): string;
        public getTransaction(): string;
        public getRelease(): string;
        public getTimestamp(): java.util.Date;
        public getContexts(): java.util.Map<string, java.util.Map<string, any>>;
        public getLogger(): string;
        public setSdk(param0: io.sentry.event.Sdk): void;
        public toString(): string;
        public getCulprit(): string;
        public getTags(): java.util.Map<string, string>;
        public getPlatform(): string;
        public getSdk(): io.sentry.event.Sdk;
        public getChecksum(): string;
        public setDist(param0: string): void;
        public getFingerprint(): java.util.List<string>;
        public getSentryInterfaces(): java.util.Map<string, io.sentry.event.interfaces.SentryInterface>;
        public setContexts(param0: java.util.Map<string, java.util.Map<string, any>>): void;
      }
      export module Event {
        export class Level {
          public static class: java.lang.Class<io.sentry.event.Event.Level>;
          public static FATAL: io.sentry.event.Event.Level;
          public static ERROR: io.sentry.event.Event.Level;
          public static WARNING: io.sentry.event.Event.Level;
          public static INFO: io.sentry.event.Event.Level;
          public static DEBUG: io.sentry.event.Event.Level;
          public static values(): native.Array<io.sentry.event.Event.Level>;
          public static valueOf(param0: string): io.sentry.event.Event.Level;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class EventBuilder {
        public static class: java.lang.Class<io.sentry.event.EventBuilder>;
        public static DEFAULT_PLATFORM: string;
        public static DEFAULT_HOSTNAME: string;
        public static HOSTNAME_CACHE_DURATION: number;
        public withFingerprint(param0: native.Array<string>): io.sentry.event.EventBuilder;
        public withEnvironment(param0: string): io.sentry.event.EventBuilder;
        public build(): io.sentry.event.Event;
        public withLevel(param0: io.sentry.event.Event.Level): io.sentry.event.EventBuilder;
        public withExtra(param0: string, param1: any): io.sentry.event.EventBuilder;
        public withLogger(param0: string): io.sentry.event.EventBuilder;
        public constructor();
        public getEvent(): io.sentry.event.Event;
        /** @deprecated */
        public withCulprit(param0: io.sentry.event.interfaces.SentryStackTraceElement): io.sentry.event.EventBuilder;
        public withSentryInterface(
          param0: io.sentry.event.interfaces.SentryInterface,
          param1: boolean
        ): io.sentry.event.EventBuilder;
        public withTimestamp(param0: java.util.Date): io.sentry.event.EventBuilder;
        public withTag(param0: string, param1: string): io.sentry.event.EventBuilder;
        public constructor(param0: java.util.UUID);
        public withPlatform(param0: string): io.sentry.event.EventBuilder;
        public withChecksum(param0: string): io.sentry.event.EventBuilder;
        public withSdkIntegration(param0: string): io.sentry.event.EventBuilder;
        /** @deprecated */
        public withCulprit(param0: java.lang.StackTraceElement): io.sentry.event.EventBuilder;
        public withDist(param0: string): io.sentry.event.EventBuilder;
        public withFingerprint(param0: java.util.List<string>): io.sentry.event.EventBuilder;
        public withServerName(param0: string): io.sentry.event.EventBuilder;
        public withTransaction(param0: string): io.sentry.event.EventBuilder;
        public withContexts(param0: java.util.Map<string, java.util.Map<string, any>>): io.sentry.event.EventBuilder;
        /** @deprecated */
        public withCulprit(param0: string): io.sentry.event.EventBuilder;
        public toString(): string;
        public withSentryInterface(param0: io.sentry.event.interfaces.SentryInterface): io.sentry.event.EventBuilder;
        public withBreadcrumbs(param0: java.util.List<io.sentry.event.Breadcrumb>): io.sentry.event.EventBuilder;
        public withMessage(param0: string): io.sentry.event.EventBuilder;
        public withRelease(param0: string): io.sentry.event.EventBuilder;
        public withChecksumFor(param0: string): io.sentry.event.EventBuilder;
      }
      export module EventBuilder {
        export class HostnameCache {
          public static class: java.lang.Class<io.sentry.event.EventBuilder.HostnameCache>;
          public static GET_HOSTNAME_TIMEOUT: number;
          public updateCache(): void;
          public getHostname(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class Sdk {
        public static class: java.lang.Class<io.sentry.event.Sdk>;
        public getVersion(): string;
        public getIntegrations(): java.util.Set<string>;
        public constructor(param0: string, param1: string, param2: java.util.Set<string>);
        public getName(): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class User {
        public static class: java.lang.Class<io.sentry.event.User>;
        public getId(): string;
        public getEmail(): string;
        public getIpAddress(): string;
        public constructor(param0: string, param1: string, param2: string, param3: string);
        public getUsername(): string;
        public getData(): java.util.Map<string, any>;
        public constructor(
          param0: string,
          param1: string,
          param2: string,
          param3: string,
          param4: java.util.Map<string, any>
        );
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export class UserBuilder {
        public static class: java.lang.Class<io.sentry.event.UserBuilder>;
        public setIpAddress(param0: string): io.sentry.event.UserBuilder;
        public build(): io.sentry.event.User;
        public setData(param0: java.util.Map<string, any>): io.sentry.event.UserBuilder;
        public setId(param0: string): io.sentry.event.UserBuilder;
        public setUsername(param0: string): io.sentry.event.UserBuilder;
        public setEmail(param0: string): io.sentry.event.UserBuilder;
        public withData(param0: string, param1: any): io.sentry.event.UserBuilder;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class BasicRemoteAddressResolver extends io.sentry.event.helper.RemoteAddressResolver {
          public static class: java.lang.Class<io.sentry.event.helper.BasicRemoteAddressResolver>;
          public constructor();
          public getRemoteAddress(param0: any): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class ContextBuilderHelper extends io.sentry.event.helper.EventBuilderHelper {
          public static class: java.lang.Class<io.sentry.event.helper.ContextBuilderHelper>;
          public constructor(param0: io.sentry.SentryClient);
          public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class EventBuilderHelper {
          public static class: java.lang.Class<io.sentry.event.helper.EventBuilderHelper>;
          /**
           * Constructs a new instance of the io.sentry.event.helper.EventBuilderHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { helpBuildingEvent(param0: io.sentry.event.EventBuilder): void });
          public constructor();
          public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class ForwardedAddressResolver extends io.sentry.event.helper.RemoteAddressResolver {
          public static class: java.lang.Class<io.sentry.event.helper.ForwardedAddressResolver>;
          public constructor();
          public getRemoteAddress(param0: any): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class HttpEventBuilderHelper extends io.sentry.event.helper.EventBuilderHelper {
          public static class: java.lang.Class<io.sentry.event.helper.HttpEventBuilderHelper>;
          public constructor(param0: io.sentry.event.helper.RemoteAddressResolver);
          public constructor();
          public getRemoteAddressResolver(): io.sentry.event.helper.RemoteAddressResolver;
          public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class RemoteAddressResolver {
          public static class: java.lang.Class<io.sentry.event.helper.RemoteAddressResolver>;
          /**
           * Constructs a new instance of the io.sentry.event.helper.RemoteAddressResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getRemoteAddress(param0: any): string });
          public constructor();
          public getRemoteAddress(param0: any): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module helper {
        export class ShouldSendEventCallback {
          public static class: java.lang.Class<io.sentry.event.helper.ShouldSendEventCallback>;
          /**
           * Constructs a new instance of the io.sentry.event.helper.ShouldSendEventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { shouldSend(param0: io.sentry.event.Event): boolean });
          public constructor();
          public shouldSend(param0: io.sentry.event.Event): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class DebugMetaInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.DebugMetaInterface>;
          public static DEBUG_META_INTERFACE: string;
          public addDebugImage(param0: io.sentry.event.interfaces.DebugMetaInterface.DebugImage): void;
          public toString(): string;
          public constructor();
          public getInterfaceName(): string;
          public hashCode(): number;
          public getDebugImages(): java.util.ArrayList<io.sentry.event.interfaces.DebugMetaInterface.DebugImage>;
        }
        export module DebugMetaInterface {
          export class DebugImage {
            public static class: java.lang.Class<io.sentry.event.interfaces.DebugMetaInterface.DebugImage>;
            public getUuid(): string;
            public getType(): string;
            public constructor(param0: string, param1: string);
            public toString(): string;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class ExceptionInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.ExceptionInterface>;
          public static EXCEPTION_INTERFACE: string;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: java.lang.Throwable);
          public constructor(param0: java.util.Deque<io.sentry.event.interfaces.SentryException>);
          public getInterfaceName(): string;
          public hashCode(): number;
          public getExceptions(): java.util.Deque<io.sentry.event.interfaces.SentryException>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class HttpInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.HttpInterface>;
          public static HTTP_INTERFACE: string;
          public isAsyncStarted(): boolean;
          public getHeaders(): java.util.Map<string, java.util.Collection<string>>;
          public getLocalAddr(): string;
          public toString(): string;
          public constructor(
            param0: string,
            param1: string,
            param2: java.util.Map<string, java.util.Collection<string>>,
            param3: string,
            param4: java.util.Map<string, string>,
            param5: string,
            param6: string,
            param7: number,
            param8: string,
            param9: string,
            param10: number,
            param11: string,
            param12: boolean,
            param13: boolean,
            param14: string,
            param15: string,
            param16: java.util.Map<string, java.util.Collection<string>>,
            param17: string
          );
          public getCookies(): java.util.Map<string, string>;
          public getBody(): string;
          public hashCode(): number;
          public constructor(param0: any, param1: io.sentry.event.helper.RemoteAddressResolver, param2: string);
          public getRequestUrl(): string;
          public getServerName(): string;
          public getRemoteAddr(): string;
          public isSecure(): boolean;
          public constructor(param0: any);
          public constructor(param0: any, param1: io.sentry.event.helper.RemoteAddressResolver);
          public getProtocol(): string;
          public getAuthType(): string;
          public equals(param0: any): boolean;
          public getLocalName(): string;
          public getParameters(): java.util.Map<string, java.util.Collection<string>>;
          public getQueryString(): string;
          public getServerPort(): number;
          public getRemoteUser(): string;
          public getInterfaceName(): string;
          public getLocalPort(): number;
          public getMethod(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class MessageInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.MessageInterface>;
          public static MESSAGE_INTERFACE: string;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string);
          public getParameters(): java.util.List<string>;
          public constructor(param0: string, param1: java.util.List<string>);
          public getMessage(): string;
          public getInterfaceName(): string;
          public hashCode(): number;
          public constructor(param0: string, param1: java.util.List<string>, param2: string);
          public constructor(param0: string, param1: native.Array<string>);
          public getFormatted(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class SentryException {
          public static class: java.lang.Class<io.sentry.event.interfaces.SentryException>;
          public static DEFAULT_PACKAGE_NAME: string;
          public equals(param0: any): boolean;
          public constructor(param0: java.lang.Throwable, param1: native.Array<java.lang.StackTraceElement>);
          public getExceptionMessage(): string;
          public toString(): string;
          public getStackTraceInterface(): io.sentry.event.interfaces.StackTraceInterface;
          public constructor(
            param0: string,
            param1: string,
            param2: string,
            param3: io.sentry.event.interfaces.StackTraceInterface
          );
          public getExceptionClassName(): string;
          public static extractExceptionQueue(
            param0: java.lang.Throwable
          ): java.util.Deque<io.sentry.event.interfaces.SentryException>;
          public hashCode(): number;
          public getExceptionPackageName(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.SentryInterface>;
          /**
           * Constructs a new instance of the io.sentry.event.interfaces.SentryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getInterfaceName(): string });
          public constructor();
          public getInterfaceName(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class SentryStackTraceElement {
          public static class: java.lang.Class<io.sentry.event.interfaces.SentryStackTraceElement>;
          public static fromStackTraceElements(
            param0: native.Array<java.lang.StackTraceElement>,
            param1: native.Array<io.sentry.jvmti.Frame>
          ): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
          public getFunction(): string;
          public getLineno(): number;
          public getFileName(): string;
          public getModule(): string;
          public getColno(): java.lang.Integer;
          public getPlatform(): string;
          public getLocals(): java.util.Map<string, any>;
          public static fromStackTraceElements(
            param0: native.Array<java.lang.StackTraceElement>
          ): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
          public static fromStackTraceElement(
            param0: java.lang.StackTraceElement
          ): io.sentry.event.interfaces.SentryStackTraceElement;
          public equals(param0: any): boolean;
          public getAbsPath(): string;
          public toString(): string;
          public constructor(
            param0: string,
            param1: string,
            param2: string,
            param3: number,
            param4: java.lang.Integer,
            param5: string,
            param6: string,
            param7: java.util.Map<string, any>
          );
          public constructor(
            param0: string,
            param1: string,
            param2: string,
            param3: number,
            param4: java.lang.Integer,
            param5: string,
            param6: string
          );
          public hashCode(): number;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class StackTraceInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.StackTraceInterface>;
          public static STACKTRACE_INTERFACE: string;
          public getStackTrace(): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: native.Array<java.lang.StackTraceElement>);
          public getInterfaceName(): string;
          public getFramesCommonWithEnclosing(): number;
          public hashCode(): number;
          public constructor(
            param0: native.Array<java.lang.StackTraceElement>,
            param1: native.Array<java.lang.StackTraceElement>
          );
          public constructor(
            param0: native.Array<java.lang.StackTraceElement>,
            param1: native.Array<java.lang.StackTraceElement>,
            param2: native.Array<io.sentry.jvmti.Frame>
          );
          public constructor(param0: native.Array<io.sentry.event.interfaces.SentryStackTraceElement>);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module event {
      export module interfaces {
        export class UserInterface extends io.sentry.event.interfaces.SentryInterface {
          public static class: java.lang.Class<io.sentry.event.interfaces.UserInterface>;
          public static USER_INTERFACE: string;
          public getUsername(): string;
          public equals(param0: any): boolean;
          public getIpAddress(): string;
          public toString(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string);
          public getId(): string;
          public constructor(
            param0: string,
            param1: string,
            param2: string,
            param3: string,
            param4: java.util.Map<string, any>
          );
          public getInterfaceName(): string;
          public getData(): java.util.Map<string, any>;
          public hashCode(): number;
          public getEmail(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module jul {
      export class SentryHandler {
        public static class: java.lang.Class<io.sentry.jul.SentryHandler>;
        public static THREAD_ID: string;
        public printfStyle: boolean;
        public retrieveProperties(): void;
        public formatMessage(param0: string, param1: native.Array<any>): string;
        public close(): void;
        public createEventBuilder(param0: java.util.logging.LogRecord): io.sentry.event.EventBuilder;
        public static getLevel(param0: java.util.logging.Level): io.sentry.event.Event.Level;
        public publish(param0: java.util.logging.LogRecord): void;
        public static formatMessageParameters(param0: native.Array<any>): java.util.List<string>;
        public setPrintfStyle(param0: boolean): void;
        public constructor();
        public flush(): void;
      }
      export module SentryHandler {
        export class DropSentryFilter {
          public static class: java.lang.Class<io.sentry.jul.SentryHandler.DropSentryFilter>;
          public isLoggable(param0: java.util.logging.LogRecord): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module jvmti {
      export class Frame {
        public static class: java.lang.Class<io.sentry.jvmti.Frame>;
        public getMethod(): java.lang.reflect.Method;
        public getLocals(): java.util.Map<string, any>;
        public constructor(param0: java.lang.reflect.Method, param1: native.Array<io.sentry.jvmti.Frame.LocalVariable>);
        public toString(): string;
      }
      export module Frame {
        export class LocalVariable {
          public static class: java.lang.Class<io.sentry.jvmti.Frame.LocalVariable>;
          public constructor(param0: string, param1: any);
          public getValue(): any;
          public toString(): string;
          public getName(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module jvmti {
      export class FrameCache {
        public static class: java.lang.Class<io.sentry.jvmti.FrameCache>;
        public static addAppPackage(param0: string): void;
        public static add(param0: java.lang.Throwable, param1: native.Array<io.sentry.jvmti.Frame>): void;
        public static get(param0: java.lang.Throwable): native.Array<io.sentry.jvmti.Frame>;
        public static shouldCacheThrowable(param0: java.lang.Throwable, param1: number): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export class Marshaller {
        public static class: java.lang.Class<io.sentry.marshaller.Marshaller>;
        /**
         * Constructs a new instance of the io.sentry.marshaller.Marshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
          getContentType(): string;
          getContentEncoding(): string;
        });
        public constructor();
        public getContentType(): string;
        public getContentEncoding(): string;
        public marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
      }
      export module Marshaller {
        export class UncloseableOutputStream {
          public static class: java.lang.Class<io.sentry.marshaller.Marshaller.UncloseableOutputStream>;
          public write(param0: native.Array<number>, param1: number, param2: number): void;
          public constructor(param0: java.io.OutputStream);
          public write(param0: native.Array<number>): void;
          public close(): void;
          public write(param0: number): void;
          public flush(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class DebugMetaInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.DebugMetaInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.DebugMetaInterfaceBinding>;
          public constructor();
          public writeInterface(param0: any, param1: any): void;
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.DebugMetaInterface): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class ExceptionInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.ExceptionInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.ExceptionInterfaceBinding>;
          public constructor(
            param0: io.sentry.marshaller.json.InterfaceBinding<io.sentry.event.interfaces.StackTraceInterface>
          );
          public writeInterface(param0: any, param1: any): void;
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.ExceptionInterface): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class HttpInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.HttpInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.HttpInterfaceBinding>;
          public static MAX_BODY_LENGTH: number;
          public constructor();
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.HttpInterface): void;
          public writeInterface(param0: any, param1: any): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class InterfaceBinding<T> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.marshaller.json.InterfaceBinding<any>>;
          /**
           * Constructs a new instance of the io.sentry.marshaller.json.InterfaceBinding<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { writeInterface(param0: any, param1: T): void });
          public constructor();
          public writeInterface(param0: any, param1: T): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class JsonMarshaller extends io.sentry.marshaller.Marshaller {
          public static class: java.lang.Class<io.sentry.marshaller.json.JsonMarshaller>;
          public static EVENT_ID: string;
          public static MESSAGE: string;
          public static TIMESTAMP: string;
          public static LEVEL: string;
          public static LOGGER: string;
          public static PLATFORM: string;
          public static CULPRIT: string;
          public static TRANSACTION: string;
          public static SDK: string;
          public static TAGS: string;
          public static BREADCRUMBS: string;
          public static CONTEXTS: string;
          public static SERVER_NAME: string;
          public static RELEASE: string;
          public static DIST: string;
          public static ENVIRONMENT: string;
          public static FINGERPRINT: string;
          public static MODULES: string;
          public static EXTRA: string;
          public static CHECKSUM: string;
          public static DEFAULT_MAX_MESSAGE_LENGTH: number;
          public marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
          public isCompressed(): boolean;
          public setCompression(param0: boolean): void;
          public getContentEncoding(): string;
          public constructor();
          public getContentType(): string;
          public constructor(param0: number);
          public addInterfaceBinding(
            param0: java.lang.Class<any>,
            param1: io.sentry.marshaller.json.InterfaceBinding<any>
          ): void;
          public createJsonGenerator(param0: java.io.OutputStream): any;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class MessageInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.MessageInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.MessageInterfaceBinding>;
          public static DEFAULT_MAX_MESSAGE_LENGTH: number;
          public constructor();
          public writeInterface(param0: any, param1: any): void;
          public constructor(param0: number);
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.MessageInterface): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class SentryJsonGenerator {
          public static class: java.lang.Class<io.sentry.marshaller.json.SentryJsonGenerator>;
          public writeNumber(param0: string): void;
          public writeRawValue(param0: native.Array<string>, param1: number, param2: number): void;
          public writeString(param0: native.Array<string>, param1: number, param2: number): void;
          public setMaxNesting(param0: number): void;
          public writeString(param0: any): void;
          public setMaxLengthList(param0: number): void;
          public useDefaultPrettyPrinter(): any;
          public writeFieldName(param0: any): void;
          public getFeatureMask(): number;
          public writeString(param0: string): void;
          public writeNull(): void;
          public isEnabled(param0: any): boolean;
          public writeRaw(param0: string): void;
          public writeStartObject(): void;
          public disable(param0: any): any;
          public writeRawValue(param0: string): void;
          public close(): void;
          public writeEndArray(): void;
          public writeBinary(param0: any, param1: java.io.InputStream, param2: number): number;
          public setFeatureMask(param0: number): any;
          public writeNumber(param0: java.math.BigDecimal): void;
          public writeStartArray(): void;
          public writeRaw(param0: string, param1: number, param2: number): void;
          public writeEndObject(): void;
          public writeFieldName(param0: string): void;
          public writeNumber(param0: java.math.BigInteger): void;
          public writeObject(param0: any): void;
          public writeNumber(param0: number): void;
          public flush(): void;
          public writeRaw(param0: native.Array<string>, param1: number, param2: number): void;
          public writeRawValue(param0: string, param1: number, param2: number): void;
          public constructor(param0: any);
          public writeTree(param0: any): void;
          public setMaxSizeMap(param0: number): void;
          public writeUTF8String(param0: native.Array<number>, param1: number, param2: number): void;
          public setCodec(param0: any): any;
          public writeRawUTF8String(param0: native.Array<number>, param1: number, param2: number): void;
          public writeBoolean(param0: boolean): void;
          public enable(param0: any): any;
          public setMaxLengthString(param0: number): void;
          public getCodec(): any;
          public getOutputContext(): any;
          public version(): any;
          public writeBinary(param0: any, param1: native.Array<number>, param2: number, param3: number): void;
          public isClosed(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class StackTraceInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.StackTraceInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.StackTraceInterfaceBinding>;
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.StackTraceInterface): void;
          public setRemoveCommonFramesWithEnclosing(param0: boolean): void;
          public setInAppFrames(param0: java.util.Collection<string>): void;
          public constructor();
          public writeInterface(param0: any, param1: any): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module marshaller {
      export module json {
        export class UserInterfaceBinding extends io.sentry.marshaller.json.InterfaceBinding<
          io.sentry.event.interfaces.UserInterface
        > {
          public static class: java.lang.Class<io.sentry.marshaller.json.UserInterfaceBinding>;
          public writeInterface(param0: any, param1: io.sentry.event.interfaces.UserInterface): void;
          public constructor();
          public writeInterface(param0: any, param1: any): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module servlet {
      export class SentryServletContainerInitializer {
        public static class: java.lang.Class<io.sentry.servlet.SentryServletContainerInitializer>;
        public onStartup(param0: java.util.Set<java.lang.Class<any>>, param1: any): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module servlet {
      export class SentryServletRequestListener {
        public static class: java.lang.Class<io.sentry.servlet.SentryServletRequestListener>;
        public static getServletRequest(): any;
        public requestDestroyed(param0: any): void;
        public constructor();
        public requestInitialized(param0: any): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module time {
      export class Clock {
        public static class: java.lang.Class<io.sentry.time.Clock>;
        /**
         * Constructs a new instance of the io.sentry.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { millis(): number; date(): java.util.Date });
        public constructor();
        public date(): java.util.Date;
        public millis(): number;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module time {
      export class FixedClock extends io.sentry.time.Clock {
        public static class: java.lang.Class<io.sentry.time.FixedClock>;
        public date(): java.util.Date;
        public setDate(param0: java.util.Date): void;
        public millis(): number;
        public constructor(param0: java.util.Date);
        public tick(param0: number, param1: java.util.concurrent.TimeUnit): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module time {
      export class SystemClock extends io.sentry.time.Clock {
        public static class: java.lang.Class<io.sentry.time.SystemClock>;
        public date(): java.util.Date;
        public millis(): number;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class CircularFifoQueue<E> extends java.util.AbstractCollection<any> {
        public static class: java.lang.Class<io.sentry.util.CircularFifoQueue<any>>;
        public remove(): any;
        public element(): any;
        public peek(): any;
        public iterator(): java.util.Iterator<any>;
        public get(param0: number): any;
        public constructor();
        public size(): number;
        public poll(): any;
        public constructor(param0: java.util.Collection<any>);
        public maxSize(): number;
        public add(param0: any): boolean;
        public offer(param0: any): boolean;
        public clear(): void;
        public constructor(param0: number);
        public isFull(): boolean;
        public isAtFullCapacity(): boolean;
        public isEmpty(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class Util {
        public static class: java.lang.Class<io.sentry.util.Util>;
        public static parseTags(param0: string): java.util.Map<string, string>;
        public static parseDouble(param0: string, param1: java.lang.Double): java.lang.Double;
        public static parseExtra(param0: string): java.util.Map<string, string>;
        public static closeQuietly(param0: java.io.Closeable): void;
        public static safelyRemoveShutdownHook(param0: java.lang.Thread): boolean;
        public static parseInteger(param0: string, param1: java.lang.Integer): java.lang.Integer;
        public static parseLong(param0: string, param1: java.lang.Long): java.lang.Long;
        public static trimString(param0: string, param1: number): string;
        public static isNullOrEmpty(param0: string): boolean;
        public static parseMdcTags(param0: string): java.util.Set<string>;
        /** @deprecated */
        public static parseExtraTags(param0: string): java.util.Set<string>;
        public static equals(param0: any, param1: any): boolean;
      }
    }
  }
}

//Generics information:
//io.sentry.marshaller.json.InterfaceBinding:1
//io.sentry.util.CircularFifoQueue:1
