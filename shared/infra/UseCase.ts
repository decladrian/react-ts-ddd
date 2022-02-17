export class UseCase {
  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings: { props: any }
  ): Promise<T> {
    const data = await useCaseCall();
    return data;
  }
}
