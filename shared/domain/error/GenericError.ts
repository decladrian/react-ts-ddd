export class GenericError extends Error {
  type: string;
  constuctor(public message: string) {}
}
