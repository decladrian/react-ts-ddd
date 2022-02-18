import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { UserModel } from '../domain/UserModel';

export class ProfileController
  extends Controller
  implements UserModel.useCases
{
  private readonly repository = container.profileRepository;
  private prefix = 'PROFILE';

  async find() {
    return this.query.execute(this.prefix, () => this.repository.find());
  }

  async edit(profile) {
    return this.command.execute(
      this.prefix.concat('_EDIT'),
      () => this.repository.edit(profile),
      { params: profile }
    );
  }
}
