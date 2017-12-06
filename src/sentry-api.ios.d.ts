declare function NSErrorFromSentryError(
    error: SentryError,
    description: string
): NSError;

declare class SentryAsynchronousOperation extends NSOperation {
    static alloc(): SentryAsynchronousOperation; // inherited from NSObject

    static new(): SentryAsynchronousOperation; // inherited from NSObject

    completeOperation(): void;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {
    static alloc(): SentryBreadcrumb; // inherited from NSObject

    static new(): SentryBreadcrumb; // inherited from NSObject

    category: string;

    data: NSDictionary<string, any>;

    level: SentrySeverity;

    message: string;

    timestamp: Date;

    type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { level: SentrySeverity; category: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithLevelCategory(level: SentrySeverity, category: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryBreadcrumbStore extends NSObject
    implements SentrySerializable {
    static alloc(): SentryBreadcrumbStore; // inherited from NSObject

    static new(): SentryBreadcrumbStore; // inherited from NSObject

    maxBreadcrumbs: number;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { fileManager: SentryFileManager });

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    class(): typeof NSObject;

    clear(): void;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    count(): number;

    initWithFileManager(fileManager: SentryFileManager): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryBreadcrumbTracker extends NSObject {
    static alloc(): SentryBreadcrumbTracker; // inherited from NSObject

    static new(): SentryBreadcrumbTracker; // inherited from NSObject

    start(): void;
}

declare class SentryClient extends NSObject {
    static alloc(): SentryClient; // inherited from NSObject

    static new(): SentryClient; // inherited from NSObject

    _debugMeta: NSArray<SentryDebugMeta>;

    _snapshotThreads: NSArray<SentryThread>;

    beforeSendRequest: (p1: SentryNSURLRequest) => void;

    beforeSerializeEvent: (p1: SentryEvent) => void;

    breadcrumbs: SentryBreadcrumbStore;

    extra: NSDictionary<string, any>;

    lastContext: NSDictionary<string, any>;

    lastEvent: SentryEvent;

    sampleRate: number;

    shouldSendEvent: (p1: SentryEvent) => boolean;

    tags: NSDictionary<string, string>;

    user: SentryUser;

    static logLevel: SentryLogLevel;

    static readonly sdkName: string;

    static sharedClient: SentryClient;

    static readonly versionString: string;

    constructor(o: { dsn: string });

    appendStacktraceToEvent(event: SentryEvent): void;

    clearContext(): void;

    crash(): void;

    crashedLastLaunch(): boolean;

    enableAutomaticBreadcrumbTracking(): void;

    initWithDsnDidFailWithError(dsn: string): this;

    reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(
        name: string,
        reason: string,
        language: string,
        lineOfCode: string,
        stackTrace: NSArray<any>,
        logAllThreads: boolean,
        terminateProgram: boolean
    ): void;

    sendEventWithCompletionHandler(
        event: SentryEvent,
        completionHandler: (p1: NSError) => void
    ): void;

    snapshotStacktrace(snapshotCompleted: () => void): void;

    startCrashHandlerWithError(): boolean;

    storeEvent(event: SentryEvent): void;
}

declare class SentryContext extends NSObject implements SentrySerializable {
    static alloc(): SentryContext; // inherited from NSObject

    static new(): SentryContext; // inherited from NSObject

    appContext: NSDictionary<string, any>;

    deviceContext: NSDictionary<string, any>;

    osContext: NSDictionary<string, any>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryCrashExceptionApplication extends NSObject {
    static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

    static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare class SentryDebugMeta extends NSObject implements SentrySerializable {
    static alloc(): SentryDebugMeta; // inherited from NSObject

    static new(): SentryDebugMeta; // inherited from NSObject

    cpuSubType: number;

    cpuType: number;

    imageAddress: string;

    imageSize: number;

    imageVmAddress: string;

    majorVersion: number;

    minorVersion: number;

    name: string;

    revisionVersion: number;

    type: string;

    uuid: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryDsn extends NSObject {
    static alloc(): SentryDsn; // inherited from NSObject

    static new(): SentryDsn; // inherited from NSObject

    url: NSURL;

    constructor(o: { string: string });

    initWithStringDidFailWithError(dsnString: string): this;
}

declare const enum SentryError {
    kSentryErrorUnknownError = -1,

    kSentryErrorInvalidDsnError = 100,

    kSentryErrorKSCrashNotInstalledError = 101,

    kSentryErrorInvalidCrashReportError = 102,

    kSentryErrorCompressionError = 103,

    kSentryErrorJsonConversionError = 104,

    kSentryErrorCouldNotFindDirectory = 105,

    kSentryErrorRequestError = 106,

    kSentryErrorEventNotSent = 107
}

declare var SentryErrorDomain: string;

declare class SentryEvent extends NSObject implements SentrySerializable {
    static alloc(): SentryEvent; // inherited from NSObject

    static new(): SentryEvent; // inherited from NSObject

    breadcrumbsSerialized: NSDictionary<string, any>;

    context: SentryContext;

    debugMeta: NSArray<SentryDebugMeta>;

    dist: string;

    environment: string;

    eventId: string;

    exceptions: NSArray<SentryException>;

    extra: NSDictionary<string, any>;

    fingerprint: NSArray<string>;

    infoDict: NSDictionary<any, any>;

    level: SentrySeverity;

    logger: string;

    message: string;

    modules: NSDictionary<string, string>;

    platform: string;

    releaseName: string;

    sdk: NSDictionary<string, any>;

    serverName: string;

    stacktrace: SentryStacktrace;

    tags: NSDictionary<string, string>;

    threads: NSArray<SentryThread>;

    timestamp: Date;

    user: SentryUser;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { level: SentrySeverity });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithLevel(level: SentrySeverity): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryException extends NSObject implements SentrySerializable {
    static alloc(): SentryException; // inherited from NSObject

    static new(): SentryException; // inherited from NSObject

    mechanism: NSDictionary<string, any>;

    module: string;

    thread: SentryThread;

    type: string;

    userReported: number;

    value: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { value: string; type: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithValueType(value: string, type: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryFileManager extends NSObject {
    static alloc(): SentryFileManager; // inherited from NSObject

    static createDirectoryAtPathWithError(path: string): boolean;

    static new(): SentryFileManager; // inherited from NSObject

    constructor();

    allFilesInFolder(path: string): NSArray<string>;

    deleteAllFolders(): void;

    deleteAllStoredBreadcrumbs(): void;

    deleteAllStoredEvents(): void;

    getAllStoredBreadcrumbs(): NSArray<NSDictionary<string, any>>;

    getAllStoredEvents(): NSArray<NSDictionary<string, any>>;

    initWithError(): this;

    removeFileAtPath(path: string): boolean;

    storeBreadcrumb(crumb: SentryBreadcrumb): string;

    storeDictionaryToPath(
        dictionary: NSDictionary<any, any>,
        path: string
    ): string;

    storeEvent(event: SentryEvent): string;
}

declare class SentryFrame extends NSObject implements SentrySerializable {
    static alloc(): SentryFrame; // inherited from NSObject

    static new(): SentryFrame; // inherited from NSObject

    columnNumber: number;

    fileName: string;

    function: string;

    imageAddress: string;

    instructionAddress: string;

    lineNumber: number;

    module: string;

    package: string;

    platform: string;

    symbolAddress: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryJavaScriptBridgeHelper extends NSObject {
    static alloc(): SentryJavaScriptBridgeHelper; // inherited from NSObject

    static convertReactNativeStacktrace(
        stacktrace: NSArray<any>
    ): NSArray<SentryFrame>;

    static createSentryBreadcrumbFromJavaScriptBreadcrumb(
        jsonBreadcrumb: NSDictionary<any, any>
    ): SentryBreadcrumb;

    static createSentryEventFromJavaScriptEvent(
        jsonEvent: NSDictionary<any, any>
    ): SentryEvent;

    static createSentryUserFromJavaScriptUser(
        user: NSDictionary<any, any>
    ): SentryUser;

    static new(): SentryJavaScriptBridgeHelper; // inherited from NSObject

    static parseJavaScriptStacktrace(stacktrace: string): NSArray<any>;

    static sanitizeDictionary(
        dictionary: NSDictionary<any, any>
    ): NSDictionary<any, any>;

    static sentryLogLevelFromJavaScriptLevel(level: number): SentryLogLevel;
}

declare class SentryKSCrashInstallation extends KSCrashInstallation {
    static alloc(): SentryKSCrashInstallation; // inherited from NSObject

    static new(): SentryKSCrashInstallation; // inherited from NSObject

    sendAllReports(): void;
}

declare class SentryKSCrashReportConverter extends NSObject {
    static alloc(): SentryKSCrashReportConverter; // inherited from NSObject

    static new(): SentryKSCrashReportConverter; // inherited from NSObject

    userContext: NSDictionary<any, any>;

    constructor(o: { report: NSDictionary<any, any> });

    convertReportToEvent(): SentryEvent;

    initWithReport(report: NSDictionary<any, any>): this;
}

declare class SentryKSCrashReportSink extends NSObject
    implements KSCrashReportFilter {
    static alloc(): SentryKSCrashReportSink; // inherited from NSObject

    static new(): SentryKSCrashReportSink; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(
        reports: NSArray<any>,
        onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void
    ): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryLog extends NSObject {
    static alloc(): SentryLog; // inherited from NSObject

    static logWithMessageAndLevel(message: string, level: SentryLogLevel): void;

    static new(): SentryLog; // inherited from NSObject
}

declare const enum SentryLogLevel {
    kSentryLogLevelNone = 1,

    kSentryLogLevelError = 2,

    kSentryLogLevelDebug = 3,

    kSentryLogLevelVerbose = 4
}

declare class SentryNSURLRequest extends NSMutableURLRequest {
    static alloc(): SentryNSURLRequest; // inherited from NSObject

    static new(): SentryNSURLRequest; // inherited from NSObject

    static requestWithURL(URL: NSURL): SentryNSURLRequest; // inherited from NSURLRequest

    static requestWithURLCachePolicyTimeoutInterval(
        URL: NSURL,
        cachePolicy: NSURLRequestCachePolicy,
        timeoutInterval: number
    ): SentryNSURLRequest; // inherited from NSURLRequest

    constructor(o: { storeRequestWithDsn: SentryDsn; andData: NSData });

    constructor(o: { storeRequestWithDsn: SentryDsn; andEvent: SentryEvent });

    initStoreRequestWithDsnAndDataDidFailWithError(
        dsn: SentryDsn,
        data: NSData
    ): this;

    initStoreRequestWithDsnAndEventDidFailWithError(
        dsn: SentryDsn,
        event: SentryEvent
    ): this;
}

declare class SentryQueueableRequestManager extends NSObject
    implements SentryRequestManager {
    static alloc(): SentryQueueableRequestManager; // inherited from NSObject

    static new(): SentryQueueableRequestManager; // inherited from NSObject

    readonly ready: boolean; // inherited from SentryRequestManager

    constructor(o: { session: NSURLSession }); // inherited from SentryRequestManager

    addRequestCompletionHandler(
        request: NSURLRequest,
        completionHandler: (p1: NSError) => void
    ): void;

    cancelAllOperations(): void;

    initWithSession(session: NSURLSession): this;
}

interface SentryRequestManager {
    ready: boolean;

    addRequestCompletionHandler(
        request: NSURLRequest,
        completionHandler: (p1: NSError) => void
    ): void;

    cancelAllOperations(): void;

    initWithSession?(session: NSURLSession): SentryRequestManager;
}
declare var SentryRequestManager: {
    prototype: SentryRequestManager;
};

declare class SentryRequestOperation extends SentryAsynchronousOperation {
    static alloc(): SentryRequestOperation; // inherited from NSObject

    static new(): SentryRequestOperation; // inherited from NSObject

    constructor(o: {
        session: NSURLSession;
        request: NSURLRequest;
        completionHandler: (p1: NSError) => void;
    });

    initWithSessionRequestCompletionHandler(
        session: NSURLSession,
        request: NSURLRequest,
        completionHandler: (p1: NSError) => void
    ): this;
}

interface SentrySerializable extends NSObjectProtocol {
    serialize(): NSDictionary<string, any>;
}
declare var SentrySerializable: {
    prototype: SentrySerializable;
};

declare const enum SentrySeverity {
    kSentrySeverityFatal = 0,

    kSentrySeverityError = 1,

    kSentrySeverityWarning = 2,

    kSentrySeverityInfo = 3,

    kSentrySeverityDebug = 4
}

declare class SentryStacktrace extends NSObject implements SentrySerializable {
    static alloc(): SentryStacktrace; // inherited from NSObject

    static new(): SentryStacktrace; // inherited from NSObject

    frames: NSArray<SentryFrame>;

    registers: NSDictionary<string, string>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: {
        frames: NSArray<SentryFrame>;
        registers: NSDictionary<string, string>;
    });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    fixDuplicateFrames(): void;

    initWithFramesRegisters(
        frames: NSArray<SentryFrame>,
        registers: NSDictionary<string, string>
    ): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentrySwizzle extends NSObject {
    static alloc(): SentrySwizzle; // inherited from NSObject

    static new(): SentrySwizzle; // inherited from NSObject

    static swizzleClassMethodInClassNewImpFactory(
        selector: string,
        classToSwizzle: typeof NSObject,
        factoryBlock: (p1: SentrySwizzleInfo) => any
    ): void;

    static swizzleInstanceMethodInClassNewImpFactoryModeKey(
        selector: string,
        classToSwizzle: typeof NSObject,
        factoryBlock: (p1: SentrySwizzleInfo) => any,
        mode: SentrySwizzleMode,
        key: interop.Pointer | interop.Reference<any>
    ): boolean;
}

declare class SentrySwizzleInfo extends NSObject {
    static alloc(): SentrySwizzleInfo; // inherited from NSObject

    static new(): SentrySwizzleInfo; // inherited from NSObject

    readonly selector: string;

    getOriginalImplementation(): interop.FunctionReference<() => void>;
}

declare const enum SentrySwizzleMode {
    Always = 0,

    OncePerClass = 1,

    OncePerClassAndSuperclasses = 2
}

declare class SentryThread extends NSObject implements SentrySerializable {
    static alloc(): SentryThread; // inherited from NSObject

    static new(): SentryThread; // inherited from NSObject

    crashed: number;

    current: number;

    name: string;

    stacktrace: SentryStacktrace;

    threadId: number;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { threadId: number });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithThreadId(threadId: number): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryUser extends NSObject implements SentrySerializable {
    static alloc(): SentryUser; // inherited from NSObject

    static new(): SentryUser; // inherited from NSObject

    email: string;

    extra: NSDictionary<string, any>;

    userId: string;

    username: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { userId: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithUserId(userId: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare var SentryVersionNumber: number;

declare var SentryVersionNumberVar: number;

declare var SentryVersionString: interop.Reference<number>;

declare var SentryVersionStringVar: interop.Reference<number>;
