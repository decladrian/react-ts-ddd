import { PostModels } from '../domain/PostModels';
import { PostRepository } from '../infra/PostRepository';

export const PostCollectionQry = async (): Promise<PostModels.collection> => {
  return new PostRepository().findAll();
};
