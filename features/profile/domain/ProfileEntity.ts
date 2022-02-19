import { UserModel } from './UserModel';

export class ProfileEntity extends Entity<UserModel.model> {
  validate() {
    // Esto no puede no fallar...
    return true;
  }
}
