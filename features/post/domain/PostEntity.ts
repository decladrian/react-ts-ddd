import { SemanticTypes } from '../../../shared/domain/SemainticType';
import { PostModels } from './PostModels';

abstract class Entity<T> {
  constructor(protected data: T) {}

  protected errors = {} as any;
  abstract validate(): boolean;

  get dto() {
    return this.data;
  }

  getErrors() {
    return this.errors;
  }
}

export class PostEntity extends Entity<PostModels.model> {
  constructor(protected data: PostModels.model) {
    super(data);
  }

  
}
