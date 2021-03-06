import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { SemanticTypes } from '../../../shared/domain/SemainticType';
import { PostEntity } from '../domain/PostEntity';
import { PostModels } from '../domain/PostModels';

export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;
  //private readonly postSubscriber = container.postSubscriber;
  private prefix = 'POST';

  save(payload: PostModels.saveRequest) {
    const postEntity = new PostEntity(payload as PostModels.model);
    return this.command.execute(
      this.prefix.concat('_SAVE'),
      () => this.repository.save(payload),
      {
        payload,
      }
    );
  }

  like(payload: SemanticTypes.ID) {
    return this.command.execute(
      this.prefix.concat('_LIKE'),
      () => this.repository.like(payload),
      {
        payload,
      }
    );
  }

  find(payload: SemanticTypes.ID) {
    return this.query.execute(
      this.prefix,
      () => this.repository.find(payload),
      { payload, cache: true }
    );
  }

  findAll() {
    return this.query.execute(this.prefix.concat('_COLLECTION'), () =>
      this.repository.findAll()
    );
  }
}
