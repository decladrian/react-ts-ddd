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

  validate() {
    const { title, content } = this.data;
    this.errors = {};
    if (title.length < 3) {
      this.errors.tile = 'Min lenght 3';
    }
    if (content.length < 3) {
      this.errors.content = 'Min lenght 3';
    }

    return Object.keys(this.errors).length === 0;
  }
}
