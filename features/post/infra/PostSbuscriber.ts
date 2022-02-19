import { libs } from '../../../container';

export class PostSubscriber {
  //@ts-ignore
  static $subject = new libs.Subject(() => {});
}
