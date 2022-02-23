export class Validator {
  protected errors = {} as any;

  validations = {};

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
