export abstract class UseCase {
  constructor(protected logger, protected alert) {}

  abstract execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T>;
}
