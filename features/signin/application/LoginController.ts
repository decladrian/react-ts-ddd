import { container } from '../../../container';
import { AuthModel } from '../domain/AuthModel';

export class LoginController implements AuthModel.useCases {
  private readonly repository = container.loginRepository;

  async login(form) {
    return this.repository.login(form);
  }
}