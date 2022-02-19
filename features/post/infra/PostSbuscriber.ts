import { libs } from '../../../container';

export class PostSubscriber {
  constructor(private subject: any) {}

  getSubject() {
    return this.subject;
  }
}
