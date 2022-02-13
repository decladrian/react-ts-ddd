import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

export class PostRepository implements PostModels.repository {
  fetch = async (id: number) => {
    return PostMock;
  };

  findAll = async () => {
    return PostCollectionMock.posts;
  };

  save = async (post) => {
    return PostSaveMock;
  };
}
