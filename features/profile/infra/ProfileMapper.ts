import { UserModel } from '../domain/UserModel';
import { ProfileFormModel } from './ProfileFormModel';
import { DateMapper } from '../../../shared/infra/utils/DateMapper';

export class ProfileMapper {
  static formToDTO(form: ProfileFormModel): UserModel.editResponse {
    return {
      ...form,
      birthday: DateMapper.nativeDateToStringFormat(
        form.birthday,
        'YYYY-MM-DD'
      ),
    };
  }
}
