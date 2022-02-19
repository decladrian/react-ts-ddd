import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { PostEntity } from '../domain/PostEntity';
import { PostModels } from '../domain/PostModels';

export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;
  private readonly $postSubscriber = container.$postSubscriber;
  private prefix = 'POST';

  save(post) {
    const postEntity = new PostEntity(post);
    if (!postEntity.validate()) {
      this.$postSubscriber.getSubject().next(postEntity.getErrors());
      throw new Error('Invalid Post');
    }
    return this.command.execute(
      this.prefix.concat('_SAVE'),
      () => this.repository.save(postEntity.dto),
      {
        payload: { postEntity },
      }
    );
  }

  like(id: number) {
    return this.command.execute(
      this.prefix.concat('_LIKE'),
      () => this.repository.like(id),
      {
        payload: { id },
      }
    );
  }

  find(id: number) {
    return this.query.execute(this.prefix, () => this.repository.find(id), {
      payload: { id },
    });
  }

  findAll() {
    return this.query.execute(this.prefix.concat('_COLLECTION'), () =>
      this.repository.findAll()
    );
  }
}
