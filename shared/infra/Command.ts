import { container } from '../../container';
import { UseCase } from './UseCase';

export class Command extends UseCase {
  constructor(protected logger, protected alert) {
    super(logger);
  }

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    try {
      var data = await useCaseCall();
      this.alert('Holi');
      this.logger.log('RUN COMMAND:', key, data, settings);
    } catch (e) {
      throw { error: e.message };
    }
    return data;
  }
}
