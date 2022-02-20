import { libs } from '../../../container';
import { UseCase } from './UseCase';

export class Query extends UseCase {
  private readonly cacheQuery = libs.CacheQuery;

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { payload?: any; cache?: {} }
  ): Promise<T> {
    const { payload, cache } = settings;
    if (cache && this.cacheQuery.get(key)) {
      return this.cacheQuery.get(key) as T;
    }
    var data = await useCaseCall();
    if (cache) {
      this.cacheQuery.set(key, payload);
    }
    return data;
  }
}
