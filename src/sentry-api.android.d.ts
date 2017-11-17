/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare module io {
    export module sentry {
        export class DefaultSentryClientFactory extends io.sentry.SentryClientFactory {
            public static NAIVE_PROTOCOL: string;
            public static COMPRESSION_OPTION: string;
            public static MAX_MESSAGE_LENGTH_OPTION: string;
            public static TIMEOUT_OPTION: string;
            public static TIMEOUT_DEFAULT: number;
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
            public getBufferedConnectionGracefulShutdownEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getSampleRate(param0: io.sentry.dsn.Dsn): java.lang.Double;
            public getRejectedExecutionHandler(param0: io.sentry.dsn.Dsn): java.util.concurrent.RejectedExecutionHandler;
            public getUncaughtHandlerEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getProxyPort(param0: io.sentry.dsn.Dsn): number;
            public getRelease(param0: io.sentry.dsn.Dsn): string;
            public getAsyncPriority(param0: io.sentry.dsn.Dsn): number;
            public getBuffer(param0: io.sentry.dsn.Dsn): io.sentry.buffer.Buffer;
            public getBufferSize(param0: io.sentry.dsn.Dsn): number;
            public createMarshaller(param0: io.sentry.dsn.Dsn): io.sentry.marshaller.Marshaller;
            public getBufferedConnectionShutdownTimeout(param0: io.sentry.dsn.Dsn): number;
            public getMdcTags(param0: io.sentry.dsn.Dsn): java.util.Set<any>;
            public getServerName(param0: io.sentry.dsn.Dsn): string;
            public createStdOutConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
            public getAsyncEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getExtraTags(param0: io.sentry.dsn.Dsn): java.util.Set<any>;
            public getBufferEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getAsyncThreads(param0: io.sentry.dsn.Dsn): number;
            public getAsyncGracefulShutdownEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getProxyHost(param0: io.sentry.dsn.Dsn): string;
            public getInAppFrames(param0: io.sentry.dsn.Dsn): java.util.Collection<any>;
            public getHideCommonFramesEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getBypassSecurityEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public getAsyncShutdownTimeout(param0: io.sentry.dsn.Dsn): number;
            public getExtra(param0: io.sentry.dsn.Dsn): java.util.Map<any, any>;
            public getCompressionEnabled(param0: io.sentry.dsn.Dsn): boolean;
            public constructor();
            public createSentryClient(param0: io.sentry.dsn.Dsn): io.sentry.SentryClient;
            public getAsyncQueueSize(param0: io.sentry.dsn.Dsn): number;
            public getContextManager(param0: io.sentry.dsn.Dsn): io.sentry.context.ContextManager;
            public getProxyUser(param0: io.sentry.dsn.Dsn): string;
            public getTimeout(param0: io.sentry.dsn.Dsn): number;
            public createAsyncConnection(param0: io.sentry.dsn.Dsn, param1: io.sentry.connection.Connection): io.sentry.connection.Connection;
            public createHttpConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
            public getProxyPass(param0: io.sentry.dsn.Dsn): string;
            public createConnection(param0: io.sentry.dsn.Dsn): io.sentry.connection.Connection;
            public getDist(param0: io.sentry.dsn.Dsn): string;
            public configureSentryClient(param0: io.sentry.SentryClient, param1: io.sentry.dsn.Dsn): io.sentry.SentryClient;
            public getEnvironment(param0: io.sentry.dsn.Dsn): string;
            public getBufferFlushtime(param0: io.sentry.dsn.Dsn): number;
            public getTags(param0: io.sentry.dsn.Dsn): java.util.Map<any, any>;
            public getMaxMessageLength(param0: io.sentry.dsn.Dsn): number;
        }
        export module DefaultSentryClientFactory {
            export class DaemonThreadFactory {
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
            }
        }
    }
}


declare module io {
    export module sentry {
        export class Sentry {
            public static setStoredClient(param0: io.sentry.SentryClient): void;
            public static capture(param0: io.sentry.event.Event): void;
            public static record(param0: io.sentry.event.Breadcrumb): void;
            public static setUser(param0: io.sentry.event.User): void;
            public static init(): io.sentry.SentryClient;
            public static capture(param0: io.sentry.event.EventBuilder): void;
            public static getContext(): io.sentry.context.Context;
            public static capture(param0: string): void;
            public static init(param0: string, param1: io.sentry.SentryClientFactory): io.sentry.SentryClient;
            public static close(): void;
            public static clearContext(): void;
            public static init(param0: io.sentry.SentryClientFactory): io.sentry.SentryClient;
            public static getStoredClient(): io.sentry.SentryClient;
            public static capture(param0: java.lang.Throwable): void;
            public static init(param0: string): io.sentry.SentryClient;
        }
    }
}

declare module io {
    export module sentry {
        export class SentryClient {
            public release: string;
            public dist: string;
            public environment: string;
            public serverName: string;
            public tags: java.util.Map<any, any>;
            public mdcTags: java.util.Set<any>;
            public extra: java.util.Map<any, any>;
            public addMdcTag(param0: string): void;
            public sendEvent(param0: io.sentry.event.EventBuilder): void;
            public constructor(param0: io.sentry.connection.Connection, param1: io.sentry.context.ContextManager);
            public getExtra(): java.util.Map<any, any>;
            public setServerName(param0: string): void;
            public addTag(param0: string, param1: string): void;
            public getRelease(): string;
            public getMdcTags(): java.util.Set<any>;
            public addBuilderHelper(param0: io.sentry.event.helper.EventBuilderHelper): void;
            public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
            public setTags(param0: java.util.Map<any, any>): void;
            public getEnvironment(): string;
            public setDist(param0: string): void;
            public sendException(param0: java.lang.Throwable): void;
            public addShouldSendEventCallback(param0: io.sentry.event.helper.ShouldSendEventCallback): void;
            public closeConnection(): void;
            public setMdcTags(param0: java.util.Set<any>): void;
            public addExtra(param0: string, param1: java.lang.Object): void;
            public sendEvent(param0: io.sentry.event.Event): void;
            public sendMessage(param0: string): void;
            public setExtra(param0: java.util.Map<any, any>): void;
            public getContext(): io.sentry.context.Context;
            public runBuilderHelpers(param0: io.sentry.event.EventBuilder): void;
            public getDist(): string;
            public setExtraTags(param0: java.util.Set<any>): void;
            public removeBuilderHelper(param0: io.sentry.event.helper.EventBuilderHelper): void;
            public clearContext(): void;
            public toString(): string;
            public setEnvironment(param0: string): void;
            public addExtraTag(param0: string): void;
            public setRelease(param0: string): void;
            public getTags(): java.util.Map<any, any>;
            public setupUncaughtExceptionHandler(): void;
            public getServerName(): string;
            public getBuilderHelpers(): java.util.List<any>;
        }
    }
}


declare module io {
    export module sentry {
        export abstract class SentryClientFactory {
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
            public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
            public disable(): void;
            public constructor(param0: any /* java.lang.ThreadUncaughtExceptionHandler */);
            public isEnabled(): java.lang.Boolean;
            public static setup(): io.sentry.SentryUncaughtExceptionHandler;
        }
    }
}

declare module io {
    export module sentry {
        export module android {
            export class AndroidSentryClientFactory extends io.sentry.DefaultSentryClientFactory {
                public static TAG: string;
                public getBuffer(param0: io.sentry.dsn.Dsn): io.sentry.buffer.Buffer;
                public getInAppFrames(param0: io.sentry.dsn.Dsn): java.util.Collection<any>;
                public getContextManager(param0: io.sentry.dsn.Dsn): io.sentry.context.ContextManager;
                public constructor(param0: any /* android.content.Context */);
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
                    export class AndroidEventBuilderHelper {
                        public static TAG: string;
                        public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
                        public constructor(param0: any /* android.content.Context */);
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
				/**
				 * Constructs a new instance of the io.sentry.buffer.Buffer interface with the provided implementation.
				 */
                public constructor(implementation: {
                    add(param0: io.sentry.event.Event): void;
                    discard(param0: io.sentry.event.Event): void;
                    getEvents(): java.util.Iterator<any>;
                });
                public discard(param0: io.sentry.event.Event): void;
                public getEvents(): java.util.Iterator<any>;
                public add(param0: io.sentry.event.Event): void;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module buffer {
            export class DiskBuffer {
                public static FILE_SUFFIX: string;
                public discard(param0: io.sentry.event.Event): void;
                public getEvents(): java.util.Iterator<any>;
                public constructor(param0: java.io.File, param1: number);
                public add(param0: io.sentry.event.Event): void;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module config {
            export class JndiLookup {
                public static jndiLookup(param0: string): string;
            }
        }
    }
}

declare module io {
    export module sentry {
        export module config {
            export class Lookup {
                public static lookup(param0: string): string;
                public static lookup(param0: string, param1: io.sentry.dsn.Dsn): string;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module connection {
            export abstract class AbstractConnection {
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
            export class AsyncConnection {
                public close(): void;
                public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
                public constructor(param0: io.sentry.connection.Connection, param1: java.util.concurrent.ExecutorService, param2: boolean, param3: number);
                public send(param0: io.sentry.event.Event): void;
            }
            export module AsyncConnection {
                export class EventSubmitter {
                    public run(): void;
                }
                export class ShutDownHook {
                    public run(): void;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module connection {
            export class BufferedConnection {
                public close(): void;
                public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
                public wrapConnectionWithBufferWriter(param0: io.sentry.connection.Connection): io.sentry.connection.Connection;
                public constructor(param0: io.sentry.connection.Connection, param1: io.sentry.buffer.Buffer, param2: number, param3: boolean, param4: number);
                public send(param0: io.sentry.event.Event): void;
            }
            export module BufferedConnection {
                export class Flusher {
                    public run(): void;
                }
                export class ShutDownHook {
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
				/**
				 * Constructs a new instance of the io.sentry.connection.Connection interface with the provided implementation.
				 */
                public constructor(implementation: {
                    send(param0: io.sentry.event.Event): void;
                    addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
                });
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
                public constructor(param0: java.lang.Throwable);
                public getRecommendedLockdownTime(): java.lang.Long;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: string);
                public constructor(param0: string, param1: java.lang.Throwable, param2: java.lang.Long);
                public constructor();
            }
        }
    }
}

/// <reference path="./io.sentry.event.Event.d.ts" />
declare module io {
    export module sentry {
        export module connection {
            export class EventSampler {
				/**
				 * Constructs a new instance of the io.sentry.connection.EventSampler interface with the provided implementation.
				 */
                public constructor(implementation: {
                    shouldSendEvent(param0: io.sentry.event.Event): boolean;
                });
                public shouldSendEvent(param0: io.sentry.event.Event): boolean;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module connection {
            export class EventSendCallback {
				/**
				 * Constructs a new instance of the io.sentry.connection.EventSendCallback interface with the provided implementation.
				 */
                public constructor(implementation: {
                    onFailure(param0: io.sentry.event.Event, param1: java.lang.Exception): void;
                    onSuccess(param0: io.sentry.event.Event): void;
                });
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
                public doSend(param0: io.sentry.event.Event): void;
                public setMarshaller(param0: io.sentry.marshaller.Marshaller): void;
                public close(): void;
                public setBypassSecurity(param0: boolean): void;
                public getConnection(): java.net.HttpURLConnection;
                public static getSentryApiUrl(param0: java.net.URI, param1: string): java.net.URL;
                public addEventSendCallback(param0: io.sentry.connection.EventSendCallback): void;
                public setTimeout(param0: number): void;
                public constructor(param0: java.net.URL, param1: string, param2: string, param3: java.net.Proxy, param4: io.sentry.connection.EventSampler);
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
                public static DEFAULT_MAX_LOCKDOWN_TIME: number;
                public static DEFAULT_BASE_LOCKDOWN_TIME: number;
                public isLockedDown(): boolean;
                public setState(param0: io.sentry.connection.ConnectionException): void;
                public setMaxLockdownTime(param0: number): void;
                public constructor(param0: io.sentry.time.Clock);
                public resetState(): void;
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
                public constructor(param0: string);
            }
        }
    }
}


declare module io {
    export module sentry {
        export module connection {
            export class NoopConnection extends io.sentry.connection.AbstractConnection {
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
                public constructor(param0: java.io.OutputStream);
                public doSend(param0: io.sentry.event.Event): void;
                public setMarshaller(param0: io.sentry.marshaller.Marshaller): void;
                public close(): void;
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
                public getPasswordAuthentication(): java.net.PasswordAuthentication;
                public constructor(param0: string, param1: string);
            }
        }
    }
}

declare module io {
    export module sentry {
        export module connection {
            export class RandomEventSampler {
                public constructor(param0: number, param1: java.util.Random);
                public shouldSendEvent(param0: io.sentry.event.Event): boolean;
                public constructor(param0: number);
            }
        }
    }
}


declare module io {
    export module sentry {
        export module context {
            export class Context {
                public clearTags(): void;
                public removeExtra(param0: string): void;
                public getLastEventId(): java.util.UUID;
                public clearBreadcrumbs(): void;
                public setLastEventId(param0: java.util.UUID): void;
                public getUser(): io.sentry.event.User;
                public getExtra(): java.util.Map<any, any>;
                public addTag(param0: string, param1: string): void;
                public constructor();
                public addExtra(param0: string, param1: java.lang.Object): void;
                public removeTag(param0: string): void;
                public clear(): void;
                public constructor(param0: number);
                public getTags(): java.util.Map<any, any>;
                public clearExtra(): void;
                public getBreadcrumbs(): java.util.List<any>;
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
				/**
				 * Constructs a new instance of the io.sentry.context.ContextManager interface with the provided implementation.
				 */
                public constructor(implementation: {
                    getContext(): io.sentry.context.Context;
                    clear(): void;
                });
                public getContext(): io.sentry.context.Context;
                public clear(): void;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module context {
            export class SingletonContextManager {
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
            export class ThreadLocalContextManager {
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
                public static DEFAULT_DSN: string;
                public getPort(): number;
                public getPublicKey(): string;
                public getPath(): string;
                public toString(): string;
                public static dsnLookup(): string;
                public constructor(param0: string);
                public constructor(param0: java.net.URI);
                public getSecretKey(): string;
                public getUri(): java.net.URI;
                public getOptions(): java.util.Map<any, any>;
                public equals(param0: java.lang.Object): boolean;
                public getHost(): string;
                public getProtocolSettings(): java.util.Set<any>;
                public hashCode(): number;
                public getProtocol(): string;
                public getProjectId(): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
    export module sentry {
        export module dsn {
            export class InvalidDsnException {
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string, param1: java.lang.Throwable);
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
                public static SDK_NAME: string;
                public static SDK_VERSION: string;
                public static SENTRY_THREAD: java.lang.ThreadLocal<any>;
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
        export module event {
            export class Breadcrumb {
                public getType(): io.sentry.event.Breadcrumb.Type;
                public getLevel(): io.sentry.event.Breadcrumb.Level;
                public getCategory(): string;
                public equals(param0: java.lang.Object): boolean;
                public getTimestamp(): java.util.Date;
                public getData(): java.util.Map<any, any>;
                public hashCode(): number;
                public getMessage(): string;
            }
            export module Breadcrumb {
                export class Level {
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
                public setLevel(param0: io.sentry.event.Breadcrumb.Level): io.sentry.event.BreadcrumbBuilder;
                public setData(param0: java.util.Map<any, any>): io.sentry.event.BreadcrumbBuilder;
                public build(): io.sentry.event.Breadcrumb;
                public setMessage(param0: string): io.sentry.event.BreadcrumbBuilder;
                public setType(param0: io.sentry.event.Breadcrumb.Type): io.sentry.event.BreadcrumbBuilder;
                public setTimestamp(param0: java.util.Date): io.sentry.event.BreadcrumbBuilder;
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
                public getLevel(): io.sentry.event.Event.Level;
                public getServerName(): string;
                public getSentryInterfaces(): java.util.Map<any, any>;
                public getEnvironment(): string;
                public getDist(): string;
                public hashCode(): number;
                public getMessage(): string;
                public getTransaction(): string;
                public getRelease(): string;
                public setContexts(param0: java.util.Map<any, any>): void;
                public getTimestamp(): java.util.Date;
                public getLogger(): string;
                public getContexts(): java.util.Map<any, any>;
                public setSdk(param0: io.sentry.event.Sdk): void;
                public getFingerprint(): java.util.List<any>;
                public toString(): string;
                public getExtra(): java.util.Map<any, any>;
                public getId(): java.util.UUID;
                public getCulprit(): string;
                public getPlatform(): string;
                public equals(param0: java.lang.Object): boolean;
                public getSdk(): io.sentry.event.Sdk;
                public getChecksum(): string;
                public setDist(param0: string): void;
                public getTags(): java.util.Map<any, any>;
                public setFingerprint(param0: java.util.List<any>): void;
                public getBreadcrumbs(): java.util.List<any>;
            }
            export module Event {
                export class Level {
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
                public static DEFAULT_PLATFORM: string;
                public static DEFAULT_HOSTNAME: string;
                public static HOSTNAME_CACHE_DURATION: number;
                public withFingerprint(param0: native.Array<string>): io.sentry.event.EventBuilder;
                public withEnvironment(param0: string): io.sentry.event.EventBuilder;
                public build(): io.sentry.event.Event;
                public withLevel(param0: io.sentry.event.Event.Level): io.sentry.event.EventBuilder;
                public withLogger(param0: string): io.sentry.event.EventBuilder;
                public constructor();
                public withContexts(param0: java.util.Map<any, any>): io.sentry.event.EventBuilder;
                public getEvent(): io.sentry.event.Event;
                public withSentryInterface(param0: io.sentry.event.interfaces.SentryInterface, param1: boolean): io.sentry.event.EventBuilder;
                public withTag(param0: string, param1: string): io.sentry.event.EventBuilder;
                public withCulprit(param0: string): io.sentry.event.EventBuilder;
                public withPlatform(param0: string): io.sentry.event.EventBuilder;
                public withTimestamp(param0: java.util.Date): io.sentry.event.EventBuilder;
                public withChecksum(param0: string): io.sentry.event.EventBuilder;
                public withCulprit(param0: java.lang.StackTraceElement): io.sentry.event.EventBuilder;
                public withFingerprint(param0: java.util.List<any>): io.sentry.event.EventBuilder;
                public withSdkIntegration(param0: string): io.sentry.event.EventBuilder;
                public withDist(param0: string): io.sentry.event.EventBuilder;
                public withExtra(param0: string, param1: java.lang.Object): io.sentry.event.EventBuilder;
                public withBreadcrumbs(param0: java.util.List<any>): io.sentry.event.EventBuilder;
                public withServerName(param0: string): io.sentry.event.EventBuilder;
                public withTransaction(param0: string): io.sentry.event.EventBuilder;
                public constructor(param0: java.util.UUID);
                public toString(): string;
                public withSentryInterface(param0: io.sentry.event.interfaces.SentryInterface): io.sentry.event.EventBuilder;
                public withMessage(param0: string): io.sentry.event.EventBuilder;
                public withRelease(param0: string): io.sentry.event.EventBuilder;
                public withCulprit(param0: io.sentry.event.interfaces.SentryStackTraceElement): io.sentry.event.EventBuilder;
                public withChecksumFor(param0: string): io.sentry.event.EventBuilder;
            }
            export module EventBuilder {
                export class HostnameCache {
                    public static GET_HOSTNAME_TIMEOUT: number;
                    public updateCache(): void;
                    public getHostname(): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module io {
    export module sentry {
        export module event {
            export class Sdk {
                public getVersion(): string;
                public constructor(param0: string, param1: string, param2: java.util.Set<any>);
                public getIntegrations(): java.util.Set<any>;
                public getName(): string;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export class User {
                public getId(): string;
                public getEmail(): string;
                public getIpAddress(): string;
                public constructor(param0: string, param1: string, param2: string, param3: string);
                public getData(): java.util.Map<any, any>;
                public getUsername(): string;
                public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<any, any>);
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export class UserBuilder {
                public setIpAddress(param0: string): io.sentry.event.UserBuilder;
                public build(): io.sentry.event.User;
                public setId(param0: string): io.sentry.event.UserBuilder;
                public setUsername(param0: string): io.sentry.event.UserBuilder;
                public setEmail(param0: string): io.sentry.event.UserBuilder;
                public constructor();
                public setData(param0: java.util.Map<any, any>): io.sentry.event.UserBuilder;
                public withData(param0: string, param1: java.lang.Object): io.sentry.event.UserBuilder;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export module helper {
                export class BasicRemoteAddressResolver {
                    public constructor();
                    public getRemoteAddress(param0: any /* javax.servlet.http.HttpServletRequest*/): string;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export module helper {
                export class ContextBuilderHelper {
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
					/**
					 * Constructs a new instance of the io.sentry.event.helper.EventBuilderHelper interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
                    });
                    public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
                }
            }
        }
    }
}

/// <reference path="./javax.servlet.http.HttpServletRequest.d.ts" />
declare module io {
    export module sentry {
        export module event {
            export module helper {
                export class ForwardedAddressResolver {
                    public constructor();
                    public getRemoteAddress(param0: any /* javax.servlet.http.HttpServletRequest */): string;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export module helper {
                export class HttpEventBuilderHelper {
                    public constructor(param0: io.sentry.event.helper.RemoteAddressResolver);
                    public constructor();
                    public getRemoteAddressResolver(): io.sentry.event.helper.RemoteAddressResolver;
                    public helpBuildingEvent(param0: io.sentry.event.EventBuilder): void;
                }
            }
        }
    }
}

/// <reference path="./javax.servlet.http.HttpServletRequest.d.ts" />
declare module io {
    export module sentry {
        export module event {
            export module helper {
                export class RemoteAddressResolver {
					/**
					 * Constructs a new instance of the io.sentry.event.helper.RemoteAddressResolver interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        getRemoteAddress(param0: any /* javax.servlet.http.HttpServletRequest */): string;
                    });
                    public getRemoteAddress(param0: any /* javax.servlet.http.HttpServletRequest */): string;
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
					/**
					 * Constructs a new instance of the io.sentry.event.helper.ShouldSendEventCallback interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        shouldSend(param0: io.sentry.event.Event): boolean;
                    });
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
                export class DebugMetaInterface {
                    public static DEBUG_META_INTERFACE: string;
                    public getDebugImages(): java.util.ArrayList<any>;
                    public addDebugImage(param0: io.sentry.event.interfaces.DebugMetaInterface.DebugImage): void;
                    public toString(): string;
                    public constructor();
                    public getInterfaceName(): string;
                    public hashCode(): number;
                }
                export module DebugMetaInterface {
                    export class DebugImage {
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
                export class ExceptionInterface {
                    public static EXCEPTION_INTERFACE: string;
                    public toString(): string;
                    public equals(param0: java.lang.Object): boolean;
                    public constructor(param0: java.lang.Throwable);
                    public getInterfaceName(): string;
                    public constructor(param0: java.util.Deque<any>);
                    public hashCode(): number;
                    public getExceptions(): java.util.Deque<any>;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module event {
            export module interfaces {
                export class HttpInterface {
                    public static HTTP_INTERFACE: string;
                    public isAsyncStarted(): boolean;
                    public getCookies(): java.util.Map<any, any>;
                    public getHeaders(): java.util.Map<any, any>;
                    public getLocalAddr(): string;
                    public toString(): string;
                    public constructor(param0: any /* javaxservlethttpHttpServletRequest */);
                    public getBody(): string;
                    public hashCode(): number;
                    public getRequestUrl(): string;
                    public equals(param0: java.lang.Object): boolean;
                    public getServerName(): string;
                    public getRemoteAddr(): string;
                    public isSecure(): boolean;
                    public constructor(param0: any /* javaxservlethttpHttpServletRequest */, param1: io.sentry.event.helper.RemoteAddressResolver);
                    public getProtocol(): string;
                    public getAuthType(): string;
                    public getLocalName(): string;
                    public getQueryString(): string;
                    public getServerPort(): number;
                    public getRemoteUser(): string;
                    public getParameters(): java.util.Map<any, any>;
                    public getInterfaceName(): string;
                    public getLocalPort(): number;
                    public constructor(param0: any /* javaxservlethttpHttpServletRequest */, param1: io.sentry.event.helper.RemoteAddressResolver, param2: string);
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
                export class MessageInterface {
                    public static MESSAGE_INTERFACE: string;
                    public toString(): string;
                    public constructor(param0: string);
                    public constructor(param0: string, param1: java.util.List<any>);
                    public constructor(param0: string, param1: java.util.List<any>, param2: string);
                    public equals(param0: java.lang.Object): boolean;
                    public getMessage(): string;
                    public getParameters(): java.util.List<any>;
                    public getInterfaceName(): string;
                    public hashCode(): number;
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
                    public static DEFAULT_PACKAGE_NAME: string;
                    public getExceptionMessage(): string;
                    public toString(): string;
                    public static extractExceptionQueue(param0: java.lang.Throwable): java.util.Deque<any>;
                    public getStackTraceInterface(): io.sentry.event.interfaces.StackTraceInterface;
                    public equals(param0: java.lang.Object): boolean;
                    public constructor(param0: string, param1: string, param2: string, param3: io.sentry.event.interfaces.StackTraceInterface);
                    public getExceptionClassName(): string;
                    public constructor(param0: java.lang.Throwable, param1: native.Array<java.lang.StackTraceElement>);
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
					/**
					 * Constructs a new instance of the io.sentry.event.interfaces.SentryInterface interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        getInterfaceName(): string;
                    });
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
                    public getFunction(): string;
                    public getLineno(): number;
                    public getFileName(): string;
                    public getModule(): string;
                    public equals(param0: java.lang.Object): boolean;
                    public constructor(param0: string, param1: string, param2: string, param3: number, param4: java.lang.Integer, param5: string, param6: string, param7: java.util.Map<any, any>);
                    public getColno(): java.lang.Integer;
                    public getPlatform(): string;
                    public getLocals(): java.util.Map<any, any>;
                    public getAbsPath(): string;
                    public static fromStackTraceElements(param0: native.Array<java.lang.StackTraceElement>): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
                    public toString(): string;
                    public constructor(param0: string, param1: string, param2: string, param3: number, param4: java.lang.Integer, param5: string, param6: string);
                    public static fromStackTraceElements(param0: native.Array<java.lang.StackTraceElement>, param1: native.Array<io.sentry.jvmti.Frame>): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
                    public static fromStackTraceElement(param0: java.lang.StackTraceElement): io.sentry.event.interfaces.SentryStackTraceElement;
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
                export class StackTraceInterface {
                    public static STACKTRACE_INTERFACE: string;
                    public getStackTrace(): native.Array<io.sentry.event.interfaces.SentryStackTraceElement>;
                    public toString(): string;
                    public constructor(param0: native.Array<java.lang.StackTraceElement>, param1: native.Array<java.lang.StackTraceElement>);
                    public constructor(param0: native.Array<java.lang.StackTraceElement>, param1: native.Array<java.lang.StackTraceElement>, param2: native.Array<io.sentry.jvmti.Frame>);
                    public equals(param0: java.lang.Object): boolean;
                    public getInterfaceName(): string;
                    public getFramesCommonWithEnclosing(): number;
                    public hashCode(): number;
                    public constructor(param0: native.Array<java.lang.StackTraceElement>);
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
                export class UserInterface {
                    public static USER_INTERFACE: string;
                    public getUsername(): string;
                    public getIpAddress(): string;
                    public toString(): string;
                    public constructor(param0: string, param1: string, param2: string, param3: string);
                    public getId(): string;
                    public equals(param0: java.lang.Object): boolean;
                    public getInterfaceName(): string;
                    public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<any, any>);
                    public hashCode(): number;
                    public getEmail(): string;
                    public getData(): java.util.Map<any, any>;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module jul {
            export class SentryHandler {
                public static THREAD_ID: string;
                public printfStyle: boolean;
                public retrieveProperties(): void;
                public formatMessage(param0: string, param1: native.Array<java.lang.Object>): string;
                public close(): void;
                public publish(param0: java.util.logging.LogRecord): void;
                public createEventBuilder(param0: java.util.logging.LogRecord): io.sentry.event.EventBuilder;
                public static getLevel(param0: java.util.logging.Level): io.sentry.event.Event.Level;
                public setPrintfStyle(param0: boolean): void;
                public constructor();
                public static formatMessageParameters(param0: native.Array<java.lang.Object>): java.util.List<any>;
                public flush(): void;
            }
            export module SentryHandler {
                export class DropSentryFilter {
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
                public getLocals(): java.util.Map<any, any>;
                public constructor(param0: java.lang.reflect.Method, param1: native.Array<io.sentry.jvmti.Frame.LocalVariable>);
                public getMethod(): java.lang.reflect.Method;
                public toString(): string;
            }
            export module Frame {
                export class LocalVariable {
                    public constructor(param0: string, param1: java.lang.Object);
                    public toString(): string;
                    public getName(): string;
                    public getValue(): java.lang.Object;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module jvmti {
            export class FrameCache {
                public static addAppPackage(param0: string): void;
                public static add(param0: java.lang.Throwable, param1: native.Array<io.sentry.jvmti.Frame>): void;
                public static shouldCacheThrowable(param0: java.lang.Throwable, param1: number): boolean;
                public static get(param0: java.lang.Throwable): native.Array<io.sentry.jvmti.Frame>;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export class Marshaller {
				/**
				 * Constructs a new instance of the io.sentry.marshaller.Marshaller interface with the provided implementation.
				 */
                public constructor(implementation: {
                    marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
                    getContentType(): string;
                    getContentEncoding(): string;
                });
                public getContentType(): string;
                public marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
                public getContentEncoding(): string;
            }
            export module Marshaller {
                export class UncloseableOutputStream {
                    public write(param0: native.Array<number>, param1: number, param2: number): void;
                    public write(param0: native.Array<number>): void;
                    public constructor(param0: java.io.OutputStream);
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
                export class DebugMetaInterfaceBinding {
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.DebugMetaInterface): void;
                    public constructor();
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class ExceptionInterfaceBinding {
                    public constructor(param0: io.sentry.marshaller.json.InterfaceBinding);
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.ExceptionInterface): void;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class HttpInterfaceBinding {
                    public static MAX_BODY_LENGTH: number;
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public constructor();
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.HttpInterface): void;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class InterfaceBinding {
					/**
					 * Constructs a new instance of the io.sentry.marshaller.json.InterfaceBinding interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    });
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class JsonMarshaller {
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
                    public isCompressed(): boolean;
                    public setCompression(param0: boolean): void;
                    public getContentEncoding(): string;
                    public constructor();
                    public marshall(param0: io.sentry.event.Event, param1: java.io.OutputStream): void;
                    public getContentType(): string;
                    public addInterfaceBinding(param0: java.lang.Class<any>, param1: io.sentry.marshaller.json.InterfaceBinding): void;
                    public constructor(param0: number);
                }
            }
        }
    }
}

/// <reference path="./com.fasterxml.jackson.core.JsonGenerator.d.ts" />
/// <reference path="./io.sentry.event.interfaces.MessageInterface.d.ts" />
/// <reference path="./io.sentry.event.interfaces.SentryInterface.d.ts" />
declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class MessageInterfaceBinding {
                    public static DEFAULT_MAX_MESSAGE_LENGTH: number;
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public constructor();
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.MessageInterface): void;
                    public constructor(param0: number);
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
                    public writeNumber(param0: string): void;
                    public writeRawValue(param0: native.Array<string>, param1: number, param2: number): void;
                    public useDefaultPrettyPrinter(): any /* com.fasterxml.jackson.core.JsonGenerator */;
                    public writeString(param0: native.Array<string>, param1: number, param2: number): void;
                    public setMaxNesting(param0: number): void;
                    public setCodec(param0: any /* com.fasterxml.jackson.core.ObjectCodec */): any /* com.fasterxml.jackson.core.JsonGenerator */;
                    public setMaxLengthList(param0: number): void;
                    public writeString(param0: any /* com.fasterxml.jackson.core.SerializableString */): void;
                    public setFeatureMask(param0: number): any /* com.fasterxml.jackson.core.JsonGenerator */;
                    public getFeatureMask(): number;
                    public writeString(param0: string): void;
                    public writeNull(): void;
                    public writeRaw(param0: string): void;
                    public writeStartObject(): void;
                    public writeNumber(param0: java.math.BigInteger): void;
                    public writeRawValue(param0: string): void;
                    public close(): void;
                    public constructor(param0: any /* com.fasterxml.jackson.core.JsonGenerator */);
                    public writeEndArray(): void;
                    public getCodec(): any /* com.fasterxml.jackson.core.ObjectCodec*/;
                    public writeStartArray(): void;
                    public enable(param0: any /* com.fasterxml.jackson.core.JsonGeneratorFeature */): any /* com.fasterxml.jackson.core.JsonGenerator */;
                    public writeRaw(param0: string, param1: number, param2: number): void;
                    public writeEndObject(): void;
                    public writeFieldName(param0: string): void;
                    public isEnabled(param0: any /* com.fasterxml.jackson.core.JsonGeneratorFeature */): boolean;
                    public writeNumber(param0: number): void;
                    public flush(): void;
                    public writeRaw(param0: native.Array<string>, param1: number, param2: number): void;
                    public writeRawValue(param0: string, param1: number, param2: number): void;
                    public setMaxSizeMap(param0: number): void;
                    public writeObject(param0: java.lang.Object): void;
                    public writeUTF8String(param0: native.Array<number>, param1: number, param2: number): void;
                    public writeRawUTF8String(param0: native.Array<number>, param1: number, param2: number): void;
                    public writeTree(param0: any /* com.fasterxml.jackson.core.TreeNode */): void;
                    public writeBoolean(param0: boolean): void;
                    public writeBinary(param0: any /* com.fasterxml.jackson.core.Base64Variant */, param1: native.Array<number>, param2: number, param3: number): void;
                    public setMaxLengthString(param0: number): void;
                    public writeNumber(param0: java.math.BigDecimal): void;
                    public writeFieldName(param0: any /* com.fasterxml.jackson.core.SerializableString */): void;
                    public writeBinary(param0: any /* com.fasterxml.jackson.core.Base64Variant */, param1: java.io.InputStream, param2: number): number;
                    public disable(param0: any /* com.fasterxml.jackson.core.JsonGeneratorFeature */): any /* com.fasterxml.jackson.core.JsonGenerator */;
                    public getOutputContext(): any /* com.fasterxml.jackson.core.JsonStreamContext */;
                    public version(): any /* com.fasterxml.jackson.core.Version */;
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
                export class StackTraceInterfaceBinding {
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public setRemoveCommonFramesWithEnclosing(param0: boolean): void;
                    public setInAppFrames(param0: java.util.Collection<any>): void;
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.StackTraceInterface): void;
                    public constructor();
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module marshaller {
            export module json {
                export class UserInterfaceBinding {
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.SentryInterface): void;
                    public constructor();
                    public writeInterface(param0: any /* com.fasterxml.jackson.core.JsonGenerator */, param1: io.sentry.event.interfaces.UserInterface): void;
                }
            }
        }
    }
}


declare module io {
    export module sentry {
        export module servlet {
            export class SentryServletContainerInitializer {
                public onStartup(param0: java.util.Set<any>, param1: any /* javax.servlet.ServletContext */): void;
                public constructor();
            }
        }
    }
}


declare module io {
    export module sentry {
        export module servlet {
            export class SentryServletRequestListener {
                public static getServletRequest(): any /* javaxservlethttpHttpServletRequest */;
                public requestInitialized(param0: any /* javax.servlet.ServletRequestEvent */): void;
                public requestDestroyed(param0: any /* javax.servlet.ServletRequestEvent */): void;
                public constructor();
            }
        }
    }
}


declare module io {
    export module sentry {
        export module time {
            export class Clock {
				/**
				 * Constructs a new instance of the io.sentry.time.Clock interface with the provided implementation.
				 */
                public constructor(implementation: {
                    millis(): number;
                    date(): java.util.Date;
                });
                public date(): java.util.Date;
                public millis(): number;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module time {
            export class FixedClock {
                public tick(param0: number, param1: java.util.concurrent.TimeUnit): void;
                public date(): java.util.Date;
                public constructor(param0: java.util.Date);
                public millis(): number;
                public setDate(param0: java.util.Date): void;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module time {
            export class SystemClock {
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
            export class CircularFifoQueue {
                public peek(): java.lang.Object;
                public constructor(param0: java.util.Collection<any>);
                public get(param0: number): java.lang.Object;
                public poll(): java.lang.Object;
                public constructor();
                public size(): number;
                public iterator(): java.util.Iterator<any>;
                public add(param0: java.lang.Object): boolean;
                public element(): java.lang.Object;
                public maxSize(): number;
                public clear(): void;
                public constructor(param0: number);
                public isFull(): boolean;
                public isAtFullCapacity(): boolean;
                public isEmpty(): boolean;
                public remove(): java.lang.Object;
                public offer(param0: java.lang.Object): boolean;
            }
        }
    }
}


declare module io {
    export module sentry {
        export module util {
            export class Util {
                public static parseTags(param0: string): java.util.Map<any, any>;
                public static parseDouble(param0: string, param1: java.lang.Double): java.lang.Double;
                public static parseMdcTags(param0: string): java.util.Set<any>;
                public static parseLong(param0: string, param1: java.lang.Long): java.lang.Long;
                public static parseExtra(param0: string): java.util.Map<any, any>;
                public static parseInteger(param0: string, param1: java.lang.Integer): java.lang.Integer;
                public static trimString(param0: string, param1: number): string;
                public static isNullOrEmpty(param0: string): boolean;
                public static parseExtraTags(param0: string): java.util.Set<any>;
            }
        }
    }
}

