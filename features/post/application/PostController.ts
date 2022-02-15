import { container } from '../../../container';
import { PostModels } from '../domain/PostModels';
import { ValidatePost } from './ValidatePost';

export class PostController implements PostModels.useCases {
  private readonly repository = container.postRepository;
  // Duda sobre analytics: ¿application o infra?
  private readonly analytics = container.analytics;

  save(post) {
    if (!ValidatePost(post)) {
      throw new Error('Invalid data');
    }
    this.analytics.send('SAVE_POST', post);
    return this.repository.save(post);
  }

  like(id: number) {
    this.analytics.send('LIKE_POST', { id });
    return this.repository.like(id);
  }

  fetch(id: number) {
    this.analytics.send('POST', { id });
    return this.repository.fetch(id);
  }

  findAll() {
    this.analytics.send('POST', {});
    return this.repository.findAll();
  }
}
