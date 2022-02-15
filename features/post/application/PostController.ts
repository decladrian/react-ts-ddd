import { container } from '../../../container';
import { PostModels } from '../domain/PostModels';

export class PostController implements PostModels.useCases {
  private readonly repository = container.postRepository;

  save(post) {
    if (false) {
      // !validate(post)
      throw new Error('Invalid data');
    }
    return this.repository.save(post);
  }

  like(id: number) {
    return this.repository.like(id);
  }

  fetch(id: number) {
    return this.repository.fetch(id);
  }

  findAll() {
    return this.repository.findAll();
  }
}
