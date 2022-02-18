import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostLikeMock } from '../domain/mocks/post-like';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

export class PostRepository implements PostModels.useCases {
  find = async (id: number) => {
    return PostMock;
  };

  findAll = async () => {
    return PostCollectionMock.posts;
  };

  save = async (post) => {
    return PostSaveMock;
  };

  like = async (id) => {
    return PostLikeMock;
  };
}
