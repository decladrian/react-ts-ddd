import { PostModels } from '../domain/PostModels';
import { FormModel } from './FormModel';

export class PostMapper {
  formToDTO(form: FormModel): PostModels.saveBody {
    return {
      ...form,
      created_at: '2022-10-17',
    };
  }
}
