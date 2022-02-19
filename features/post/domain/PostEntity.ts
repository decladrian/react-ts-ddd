import { SemanticTypes } from '../../../shared/domain/SemainticType';
import { PostModels } from './PostModels';

export class PostEntity {
  constructor(private post: PostModels.model) {}

  get id(): SemanticTypes.ID {
    return this.post.id;
  }

  private set id(id) {
    this.post.id = id;
  }

  get user(): SemanticTypes.ID {
    return this.post.user;
  }

  get title(): string {
    return this.post.title;
  }

  get content(): string {
    return this.post.content;
  }

  get created_at(): SemanticTypes.DATEFORMAT_YYYY_MM_DDD {
    return this.post.created_at;
  }
}
