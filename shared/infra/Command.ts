import { container } from '../../container';
import { UseCase } from './UseCase';

const Logger = container.Logger;
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
