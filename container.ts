import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { UserModel } from './features/profile/domain/UserModel';
import { ProfileRepository } from './features/profile/infra/ProfileRepository';
import { Analytics } from './shared/infra/libs/Analytics';
import { Subject } from './shared/infra/observable';
import { PostSubscriber } from './features/post/infra/PostSbuscriber';
import { UseCase } from './shared/application/UseCase/UseCase';
import { Command } from './shared/application/UseCase/Command';
import { Query } from './shared/application/UseCase/Query';
import { InMemoryCache } from './shared/infra/Cache';

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
  CacheQuery: InMemoryCache,
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
