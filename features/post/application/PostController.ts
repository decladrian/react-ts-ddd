import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { PostModels } from '../domain/PostModels';
import { ValidatePost } from './ValidatePost';


const Query = container.Query;
const Command = container.Command;
export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;


  save(post) {
    if (!ValidatePost(post)) {
      throw new Error('Invalid data');
    }
    return new Command().execute('SAVE_POST', () => this.repository.save(post), {
      params: { post },
    });
  }

  like(id: number) {
    return new Command().execute('LIKE_POST', this.repository.like(id), {
      params: { id },
    });
  }

  fetch(id: number) {
    return new Query().execute('POST', this.repository.fetch(id), {
      params: { id },
    });
  }

  findAll() {
    return new Query().execute('POST_COLLECTION', this.repository.findAll());
  }
}
