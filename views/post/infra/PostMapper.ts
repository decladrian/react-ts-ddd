import { PostModels } from '../domain/PostModel';

export class PostMapper {
  formToDTO(form): PostModel.saveBody {
    return {
      ...form,
      created_at: '2022-10-17',
    };
  }
}
