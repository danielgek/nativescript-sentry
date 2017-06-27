import { Observable } from 'tns-core-modules/data/observable';
import { Sentry } from 'nativescript-sentry';

export class HelloWorldModel extends Observable {
  public message: string;
  private sentry: Sentry;

  constructor() {
    super();
  }
}