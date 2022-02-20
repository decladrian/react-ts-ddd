export abstract class Entity<T> {
  constructor(protected data: T) {}

  get(key: keyof T) {
    return this.data[key];
  }

  set(key: keyof T, value: unknown) {
    this.data[key] = value;
    return this;
  }

  protected errors = {} as object;
  abstract validate(): boolean;

  get dto() {
    return this.data;
  }

  getErrors() {
    return this.errors;
  }
}
