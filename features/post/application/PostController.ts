import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { PostModels } from '../domain/PostModels';
import { ValidatePost } from './ValidatePost';

export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;

  private prefix = 'POST';

  save(post) {
    if (!ValidatePost(post)) {
      throw new Error('Invalid Post');
    }

    return this.command.execute(
      this.prefix.concat('_SAVE'),
      () => this.repository.save(post),
      {
        params: { post },
      }
    );
  }

  like(id: number) {
    return this.command.execute(
      this.prefix.concat('_LIKE'),
      () => this.repository.like(id),
      {
        params: { id },
      }
    );
  }

  find(id: number) {
    return this.query.execute(this.prefix, () => this.repository.find(id), {
      params: { id },
    });
  }

  findAll() {
    return this.query.execute(
      this.prefix.concat('_COLLECTION'),
      () => this.repository.findAll(),
      {}
    );
  }
}
