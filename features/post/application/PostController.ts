import { container } from '../../../container';
import { PostModels } from '../domain/PostModels';
import { ValidatePost } from './ValidatePost';

export class PostController implements PostModels.useCases {
  private readonly repository = container.postRepository;
  private readonly analytics = container.analytics;

  save(post) {
    if (!ValidatePost(post)) {
      throw new Error('Invalid data');
    }
    this.analytics.send('POST', {});
    return this.repository.save(post);
  }

  like(id: number) {
    this.analytics.send('POST', {});
    return this.repository.like(id);
  }

  fetch(id: number) {
    return this.repository.fetch(id);
  }

  findAll() {
    return this.repository.findAll();
  }
}
