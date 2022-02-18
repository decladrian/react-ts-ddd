import { container, libs } from '../../container';

export class Command {
  constructor(private logger) {}

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    try {
      this.logger.log('RUN COMMAND:', key);
      var data = await useCaseCall();
    } catch (e) {
      throw { error: e.message };
    }
    return data;
  }
}
