import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { AuthModel } from './features/signin/domain/AuthModel';
import { LoginRepository } from './features/signin/infra/LoginRepository';
import { Command } from './shared/infra/Command';
import { Query } from './shared/infra/Query';
import { UseCase } from './shared/infra/UseCase';
import { Analytics } from './shared/infra/utils/Analytics';

export interface Registry {
  postRepository: PostModels.useCases;
  loginRepository: AuthModel.useCases;
  Command: UseCase;
  Query: UseCase;
  analytics: Analytics;
  Logger: any;
}

const registry = {
  postRepository: new PostRepository(),

  loginRepository: new LoginRepository(),

  Command: new Command(console, alert),

  Query: new Query(console),

  Logger: console,

  analytics: Analytics,
};

const mocks = {
  // postRepository: new PostRepositoryMock(),
};

export const container: Registry = { ...registry, ...mocks };
