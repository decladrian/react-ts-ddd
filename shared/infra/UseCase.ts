export abstract class UseCase {
  execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ): Promise<T> {
    return useCaseCall();
  }
}
