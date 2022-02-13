import { PostModels } from '../domain/PostModels';

export class PostMapper {
  formToDTO(form): PostModels.saveBody {
    return {
      ...form,
      created_at: '2022-10-17',
    };
  }
}
