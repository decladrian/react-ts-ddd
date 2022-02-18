import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { PostModels } from '../domain/PostModels';
import { ValidatePost } from './ValidatePost';

export class PostController 
  extends Controller 
  implements PostModels.useCases {
      
  private readonly repository = container.postRepository;

  save(post) {
    if (!ValidatePost(post)) {
      throw new Error('Invalid data');
    }

    return this.command.execute('SAVE_POST', () => this.repository.save(post), {
      params: { post },
    });
  }

  like(id: number) {
    return this.command.execute('LIKE_POST', () => this.repository.like(id), {
      params: { id },
    });
  }

  fetch(id: number) {
    return this.query.execute('POST', () => this.repository.fetch(id), {
      params: { id },
    });
  }

  findAll() {
    return this.query.execute(
      'POST_COLLECTION',
      () => this.repository.findAll(),
      {}
    );
  }
}
