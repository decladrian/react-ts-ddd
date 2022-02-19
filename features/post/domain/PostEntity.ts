import { PostModels } from './PostModels';

export class PostEntity extends Entity<PostModels.model> {
  constructor(protected data: PostModels.model) {
    super(data);
  }

  validate() {
    const { title, content } = this.data;
    this.errors = {};
    if (title.length < 3) {
      this.errors.tile = 'Min lenght 3';
    }
    if (content.length < 3) {
      this.errors.content = 'Min lenght 3';
    }

    return Object.keys(this.errors).length === 0;
  }
}
