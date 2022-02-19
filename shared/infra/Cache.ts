import { SemanticTypes } from '../../shared/domain/SemainticType';

export class InMemoryCache {
  static dir = {} as any;

  static get(tag) {
    const cache = InMemoryCache.dir[tag];
    if (!cache) return;
    if (cache && new Date().getTime() > cache.expire_at) {
      this.remove(tag);
      return;
    }
    return cache.payload;
  }

  static set(tag: string, payload, expire_at?: SemanticTypes.DATETIME) {
    this.dir[tag] = { payload, added_at: new Date().getTime(), expire_at };
  }

  static remove(tag) {
    delete this.dir[tag];
  }
}
