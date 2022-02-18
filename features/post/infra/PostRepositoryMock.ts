import {libs } from '../../../container';
import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostLikeMock } from '../domain/mocks/post-like';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

export class PostRepositoryMock implements PostModels.useCases {
  private readonly logger = libs.Logger;

  fetch = async (id: number) => {
    this.logger.log('FETCH post ', id);
    return PostMock;
  };

  findAll = async () => {
    this.logger.log('FINDALL posts');
    return PostCollectionMock.posts;
  };

  save = async (post) => {
    this.logger.log('SAVE post', post);
    return PostSaveMock;
  };

  like = async (id) => {
    this.logger.log('LIKE post', id);
    return PostLikeMock;
  };
}
