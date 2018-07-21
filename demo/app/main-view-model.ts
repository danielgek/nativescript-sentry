import { Sentry } from 'nativescript-sentry';
import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
  public message: string;
  private sentry: Sentry;

  constructor() {
    super();
  }
}
