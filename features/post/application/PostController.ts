import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { ValidationError } from '../../../shared/domain/error/ValidationError';
import { PostEntity } from '../domain/PostEntity';
import { PostModels } from '../domain/PostModels';

export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;
  private readonly postSubscriber = container.postSubscriber;
  private prefix = 'POST';

  save(payload) {
    const postEntity = new PostEntity(payload);
    postEntity.set({ title: 'Title' });
    if (!postEntity.validate()) {
      // this.postSubscriber.$subject.next(postEntity.getErrors());
      throw new ValidationError('Invalid post data', postEntity.getErrors());
    }
    return this.command.execute(
      this.prefix.concat('_SAVE'),
      () => this.repository.save(payload),
      {
        payload,
      }
    );
  }

  like(payload) {
    return this.command.execute(
      this.prefix.concat('_LIKE'),
      () => this.repository.like(payload),
      {
        payload,
      }
    );
  }

  find(payload) {
    return this.query.execute(
      this.prefix,
      () => this.repository.find(payload),
      { payload }
    );
  }

  findAll() {
    return this.query.execute(this.prefix.concat('_COLLECTION'), () =>
      this.repository.findAll()
    );
  }
}
