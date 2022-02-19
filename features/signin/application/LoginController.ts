import { container } from '../../../container';
import { Controller } from '../../../shared/application/Controller';
import { AuthModel } from '../domain/AuthModel';

export class LoginController extends Controller implements AuthModel.useCases {
  private readonly repository = container.loginRepository;

  async login(form) {
    return this.command.execute('LOGIN', () => this.repository.login(form));
  }
}
