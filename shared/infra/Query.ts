import { UseCase } from './UseCase';

export class Query {
  static async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any; cache?: {} }
  ): Promise<T> {
    const data = await useCaseCall();
    return data;
  }
}
