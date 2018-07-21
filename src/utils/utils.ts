import { ad as androidApp, ios as iosApp } from 'tns-core-modules/utils/utils';
import { isAndroid, isIOS } from 'tns-core-modules/platform';

/**
 * Credits to @hypery2k nativescript-fabric
 * Improved stringify which overcomes 'TypeError: cyclic object value'
 * @param object to stringify
 */
export function stringify(object: any) {
  const seen = [];

  return JSON.stringify(object, function(key, val) {
    if (val != null && typeof val === 'object') {
      if (seen.indexOf(val) >= 0) {
        return;
      }
      seen.push(val);
    }
    return val;
  });
}

/**
 * Gets version name of the application.
 */
export function getVersionName() {
  let result;
  if (isAndroid) {
    const ctx = androidApp.getApplicationContext() as android.content.Context;
    const pkgMgr = ctx.getPackageManager() as android.content.pm.PackageManager;
    result = pkgMgr.getPackageInfo(ctx.getPackageName(), 0).versionName;
  } else {
    result = iosApp.getter(NSBundle, NSBundle.mainBundle).infoDictionary.objectForKey('CFBundleShortVersionString');
  }
  return result;
}
