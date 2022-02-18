import { container, libs } from '../../container';

export class Command {
  private readonly Logger = libs.Logger;
  static async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    this.Logger.log('RUN COMMAND:', key);
    try {
      var data = await useCaseCall();
    } catch (e) {
      throw { error: e.message };
    }
    return data;
  }
}
