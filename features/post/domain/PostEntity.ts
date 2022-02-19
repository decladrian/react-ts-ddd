import { SemanticTypes } from '../../../shared/domain/SemainticType';
import { PostModels } from './PostModels';

export class PostEntity {
  private errors = {} as any;
  constructor(private data: PostModels.model) {}

  get dto() {
    return this.data;
  }

  getErrors() {
    return this.errors;
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
