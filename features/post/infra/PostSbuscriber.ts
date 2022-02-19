import { libs } from '../../../container';

export class PostSubscriber {
  constructor(private subject: any) {}

  get $subject() {
    return this.subject;
  }
}
