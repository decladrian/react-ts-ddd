export abstract class Entity<T> {
  constructor(protected data: T) {}

  protected errors = {} as any;

  validations = {} as any;

  get(key: keyof T) {
    return this.data[key];
  }

  set(data: Partial<T>) {
    this.data = { ...this.data, ...data };
    return this;
  }

  get dto() {
    return this.data;
  }

  getErrors() {
    return this.errors;
  }

  validate() {
    this.errors = {};
    Object.keys(this.validations).forEach((key: string) => {
      this.validations[key]();
    });

    return Object.keys(this.errors).length === 0;
  }
}
