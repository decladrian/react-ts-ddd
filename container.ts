import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { LoginRepository } from './features/signin/infra/LoginRepository';
import { Analytics } from './shared/infra/utils/Analytics';

const registry = {
  // Repositories
  postRepository: new PostRepository(),
  loginRepository: new LoginRepository(),
  // libs
  analytics: Analytics,
};

const mocks = {
  //postRepository: new PostRepositoryMock(),
};

export const container = { ...registry, ...mocks };
