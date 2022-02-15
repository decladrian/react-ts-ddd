import { PostRepository } from './features/post/infra/PostRepository';
import { LoginRepository } from './features/signin/infra/LoginRepository';

const registry = {
  postRepository: new PostRepository(),
  loginRepository: new LoginRepository(),
};

const mocks = {};

export const container = { ...registry, ...mocks };
