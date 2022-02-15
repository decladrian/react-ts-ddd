import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostLikeMock } from '../domain/mocks/post-like';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

export class PostRepositoryMock implements PostModels.useCases {
  fetch = async (id: number) => {
    console.log('Mock fetch');
    return PostMock;
  };

  findAll = async () => {
    console.log('Mock findall');
    return PostCollectionMock.posts;
  };

  save = async (post) => {
    console.log('Mock save');
    return PostSaveMock;
  };

  like = async (id) => {
    console.log('Mock like');
    return PostLikeMock;
  };
}
