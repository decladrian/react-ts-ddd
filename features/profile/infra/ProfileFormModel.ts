import { SemanticTypes } from '../../../shared/domain/SemainticType';

export interface ProfileFormModel {
  email: SemanticTypes.EMAIL;
  username: string;
  birthday: Date;
}
