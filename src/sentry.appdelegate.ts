export class SentryAppDelegate extends UIResponder
    implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    public applicationDidFinishLaunchingWithOptions(
        application: UIApplication,
        launchOptions: NSDictionary<any, any>
    ): boolean {
        if (SentryClient.sharedClient) {
            SentryClient.sharedClient.startCrashHandlerWithError();
        } else {
            console.error(
                '[Sentry - iOS] No SentryClient.shared instance found!'
            );
        }
        return true;
    }
}
