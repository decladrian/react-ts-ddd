import { UserModel } from './UserModel';
import { Entity } from '../../../shared/domain/Entity';

export class ProfileEntity extends Entity<UserModel.model> {
  validate() {
    // Esto no puede no fallar...
    return true;
  }
}
