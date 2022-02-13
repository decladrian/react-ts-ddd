import { PostModels } from '../domain/PostModels';
import { PostRepository } from '../infra/PostRepository';

export const PostQry = async (id: number): Promise<PostModels.model> => {
  return new PostRepository().fetch(id);
};
