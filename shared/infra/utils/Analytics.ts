type EventNames = 'POST' | 'LOGOUT_USER' | 'LOGIN_USER' | 'VIEW_POST';

export class Analytics {
  static send(section: EventNames, data: any) {
    alert(JSON.stringify({ section, data }));
  }
}