import { ErrorTypes } from './ErrorTypes';

export class ValidationError extends Error {
  type: number = ErrorTypes.invalidDataExecption;

  constructor(message: string, public errors: object) {
    super(message);
  }
}
