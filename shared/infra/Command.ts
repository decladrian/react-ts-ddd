import { UseCase } from './UseCase';

export class Command {
  static async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    const data = await useCaseCall();
    return data;
  }
}
