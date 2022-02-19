export abstract class Entity<T> {
  constructor(protected data: T) {}

  protected errors = {} as any;
  abstract validate(): boolean;

  get dto() {
    return this.data;
  }

  getErrors() {
    return this.errors;
  }
}
