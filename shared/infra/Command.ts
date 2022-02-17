import { UseCase } from './UseCase';

export class Command {
  static async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    try {
      var data = await useCaseCall();
    } catch (e) {
      throw { error: e.message };
    }
    return data;
  }
}
