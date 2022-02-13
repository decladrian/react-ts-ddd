import { PostModels } from '../domain/PostModels';
import { PostRepository } from '../infra/PostRepository';

export const PostSaveCmd = async (form: PostModels.saveBody) => {
  return new PostRepository().save(form);
};
