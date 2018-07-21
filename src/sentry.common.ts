// import * as orientation from 'nativescript-orientation';
import * as Raven from 'raven-js';
import { Observable } from 'tns-core-modules/data/observable/observable';
import * as http from 'tns-core-modules/http/http';
import { device } from 'tns-core-modules/platform';
import { SentryUser } from './index';
import { getVersionName } from './utils/utils';

export class Common extends Observable {
  constructor() {
    super();
  }

  private static urlencode(obj) {
    const pairs = [];
    for (const key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) {
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return pairs.join('&');
  }

  protected static _init(dsn: string, config?: any) {
    // native use private and plublic dsn while the raven js olnly uses public
    const aux = dsn.split('//');
    const aux2 = aux[1].split(':');
    const aux3 = aux2[1].split('@');

    const ravenDsn = 'https://' + aux2[0] + '@' + aux3[1];

    // get the versionName of the app
    const versionName = getVersionName();

    Raven.config(ravenDsn)
      .setTransport(options => {
        http
          .request({
            url: options.url + '?' + this.urlencode(options.auth),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Origin: 'nativescript://'
            },
            content: JSON.stringify(options.data)
          })
          .then(res => {
            if (res.statusCode !== 200) {
              if (options.onError) {
                // BRAD - TESTING THIS FOR HANDLING THE ERROR
                const error = new Error();
                error.message = JSON.stringify(res.content.toJSON());
                options.onError(error);
              }
            } else {
              if (options.onSuccess) {
                options.onSuccess();
              }
            }
          })
          .catch(error => {
            if (options.onError) {
              options.onError(error);
            }
          });
      })
      .setDataCallback(data => {
        data.contexts = {
          device: {
            family: device.manufacturer,
            model: device.model
            // orientation: DeviceOrientation[orientation.getOrientation()],
            // battery_level: this.batteryPercent
          },
          os: {
            name: device.os,
            version: device.osVersion
          },
          runtime: {
            name: 'nativescript'
            // version: global.__runtimeVersion
          }
        };

        return data;
      })
      .setRelease(versionName)
      .install();
  }
  protected static _setUser(user: SentryUser) {
    Raven.setUserContext(user);
  }
  protected static _setTags(tags: any) {
    Raven.setTagsContext(tags);
  }
  protected static _setExtra(extra: any) {
    Raven.setExtraContext(extra);
  }
  protected static _clearContext() {
    Raven.clearContext();
  }
  protected static _captureMessage(message: string, options) {
    Raven.captureMessage(message, options);
  }
  protected static _captureException(exception: Error, options) {
    Raven.captureException(exception, options);
  }
  protected static _captureBreadcrumb(breadcrumb) {
    Raven.captureBreadcrumb(breadcrumb);
  }
}
