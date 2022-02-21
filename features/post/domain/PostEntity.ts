import { Entity } from '../../../shared/domain/Entity';
import { PostModels } from './PostModels';

export class PostEntity extends Entity<PostModels.model> {
  validations: PostModels.modelValidations = {
    title: () => {
      delete this.errors.title;
      if (this.data.title.length < 3) {
        this.errors.title = 'Min length 3';
        return false;
      }
      return true;
    },
    content: () => {
      delete this.errors.content;
      if (this.data.content.length < 3) {
        this.errors.content = 'Min length 3';
        return false;
      }
      return true;
    },
  };
}
