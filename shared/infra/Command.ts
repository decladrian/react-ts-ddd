import { UseCase } from './UseCase';

export class Command extends UseCase {
  constructor() {}

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings: { props: any; cache: {} }
  ): Promise<T> {
    const data = await useCaseCall();
    return data;
  }
}
