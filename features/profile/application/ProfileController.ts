import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { UserModel } from '../domain/UserModel';

export class ProfileController
  extends Controller
  implements UserModel.useCases
{
  private readonly repository = container;

  async find() {
    return {} as any;
  }

  async edit(profile) {
    return {} as any;
  }
}
