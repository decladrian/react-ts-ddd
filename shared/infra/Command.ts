import { container } from '../../container';
import { ErrorCommand } from '../application/ErrorCommand';
import { UseCase } from './UseCase';

export class Command extends UseCase {
  constructor(protected logger, protected alert) {
    super(logger);
  }

  async execute<T>(
    key: string,
    useCaseCall: (params?: any) => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    try {
      var data = await useCaseCall();
      this.logger.log('RUN COMMAND:', key, data, settings);
    } catch (e) {
      throw new ErrorCommand(e.message, '', e.code);
    }
    return data;
  }
}
