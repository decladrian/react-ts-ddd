import { libs } from '../../../container';

export class PostSubscriber {
  //@ts-ignore
  static $subject = new libs.Subject((watching: boolean) => {
    alert(watching);
  });
}
