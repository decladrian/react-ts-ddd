import { UseCase } from './UseCase';

export class Query extends UseCase {
  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any; cache?: {} }
  ): Promise<T> {
    const data = await useCaseCall();
    return data;
  }
}
