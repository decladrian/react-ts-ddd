import { libs } from '../../container';

const Logger = libs.Logger;
export class Command {
  static async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    Logger.log('RUN COMMAND:', key);
    try {
      var data = await useCaseCall();
    } catch (e) {
      throw { error: e.message };
    }
    return data;
  }
}
