import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { AuthModel } from './features/signin/domain/AuthModel';
import { LoginRepository } from './features/signin/infra/LoginRepository';
import { Analytics } from './shared/infra/utils/Analytics';

export interface Registry {
  postRepository: PostModels.useCases;
  loginRepository: AuthModel.useCases;
  resolveRepository: <T>(
    tag: string,
    repo: Promise<T>,
    config?: any
  ) => Promise<T>;
  analytics: Analytics;
}

const registry = {
  postRepository: new PostRepository(),

  loginRepository: new LoginRepository(),

  resolveRepository: async (tag, repo, config) => {
    //throw { error: 'JJ', data: config.params };
    const result = await repo;
    console.log({ tag, result, config });
    return result;
  },

  analytics: Analytics,
};

const mocks = {
  // postRepository: new PostRepositoryMock(),
};

export const container: Registry = { ...registry, ...mocks };
