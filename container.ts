import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { LoginRepository } from './features/signin/infra/LoginRepository';

const registry = {
  postRepository: new PostRepository(),
  loginRepository: new LoginRepository(),
};

const mocks = {
  postRepository: new PostRepositoryMock(),
};

export const container = { ...registry, ...mocks };
