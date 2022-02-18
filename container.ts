import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { ProfileRepository } from './features/profile/infra/ProfileRepository';
import { AuthModel } from './features/signin/domain/AuthModel';
import { LoginRepository } from './features/signin/infra/LoginRepository';
import { Command } from './shared/infra/Command';
import { Query } from './shared/infra/Query';
import { UseCase } from './shared/infra/UseCase';
import { Analytics } from './shared/infra/utils/Analytics';

export interface Registry {
  postRepository: PostModels.useCases;
  loginRepository: AuthModel.useCases;
  profileRepository: UserModel.useCases;
  Command: UseCase;
  Query: UseCase;
}

export const libs = {
  Logger: console,

  analytics: Analytics,
};

const registry = {
  postRepository: new PostRepository(),

  profileRepository: new ProfileRepository(),

  loginRepository: new LoginRepository(),

  Command: new Command(console, (data) => alert(data)),

  Query: new Query(console),
};

const mocks = {
  postRepository: new PostRepositoryMock(),
};

export const container: Registry = { ...registry, ...mocks };
