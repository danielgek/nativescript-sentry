export class SentryAppDelegate extends UIResponder
    implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    public applicationDidFinishLaunchingWithOptions(
        application: UIApplication,
        launchOptions: NSDictionary<any, any>
    ): boolean {
        console.log('bam')
        if (SentryClient.sharedClient) {
            if(!SentryClient.sharedClient.startCrashHandlerWithError()) {
                console.error(
                    '[Sentry - iOS] SentryClient.startCrashHandlerWithError crashed!'
                );
            }
        } else {
            console.error(
                '[Sentry - iOS] No SentryClient.shared instance found!'
            );
        }
        return true;
    }
}
