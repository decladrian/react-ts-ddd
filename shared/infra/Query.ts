import { InMemoryCache } from './Cache';
import { UseCase } from './UseCase';

export class Query extends UseCase {
  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { payload?: any; cache?: {} }
  ): Promise<T> {
    const { payload, cache } = settings;
    if (cache && InMemoryCache.get(key)) {
      return InMemoryCache.get(key) as T;
    }
    var data = await useCaseCall();
    if (cache) {
      InMemoryCache.set(key, payload);
    }
    return data;
  }
}
