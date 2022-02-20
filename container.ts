import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { UserModel } from './features/profile/domain/UserModel';
import { ProfileRepository } from './features/profile/infra/ProfileRepository';
import { AuthModel } from './features/signin/domain/AuthModel';
import { LoginRepository } from './features/signin/infra/LoginRepository';
import { Command } from './shared/infra/Command';
import { Query } from './shared/infra/Query';
import { UseCase } from './shared/infra/UseCase';
import { Analytics } from './shared/infra/libs/Analytics';
import { Subject } from './shared/infra/observable';
import { PostSubscriber } from './features/post/infra/PostSbuscriber';

export interface Contanier {
  postRepository: PostModels.useCases;
  profileRepository: UserModel.useCases;
  Command: UseCase;
  Query: UseCase;
  postSubscriber: PostSubscriber;
}

export const libs = {
  Logger: console,
  analytics: Analytics,
  Subject,
};

const infra = {
  postRepository: new PostRepository(),
  profileRepository: new ProfileRepository(),
  //@ts-ignore
  postSubscriber: new PostSubscriber(new Subject(() => {})),
  Command: new Command(libs.Logger, (data) => alert(data)),
  Query: new Query(libs.Logger),
};

const mocks = {
  postRepository: new PostRepositoryMock(),
};

export const container: Contanier = { ...infra, ...mocks };
