export interface UseCase {
  execute: <T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { params?: any }
  ) => Promise<T>;
}
