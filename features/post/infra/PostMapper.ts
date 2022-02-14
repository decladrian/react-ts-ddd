import { DateMapper } from '../../../shared/infra/utils/DateMapper';
import { PostModels } from '../domain/PostModels';
import { FormModel } from './FormModel';

export class PostMapper {
  formToDTO(form: FormModel): PostModels.saveBody {
    return {
      ...form,
      created_at: DateMapper.nativeDateToStringFormat(form.created_at),
    };
  }
}
