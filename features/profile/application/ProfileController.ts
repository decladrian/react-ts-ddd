import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { UserModel } from '../domain/UserModel';

export class ProfileController
  extends Controller
  implements UserModel.useCases
{
  private readonly repository = container.profileRepository;

  async find() {
    return this.repository.find();
  }

  async edit(profile) {
    return this.repository.edit(profile);
  }
}
