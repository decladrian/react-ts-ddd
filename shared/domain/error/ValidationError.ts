import { ErrorTypes } from './ErrorTypes';
import { GenericError } from './GenericError';

export class ValidationError extends Error {
  type: number = ErrorTypes.invalidDataExecption;

  constructor(message: string, public errors: object) {
    super(message);
  }
}
