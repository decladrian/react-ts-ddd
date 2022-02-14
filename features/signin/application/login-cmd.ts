import { AuthModel } from '../domain/AuthModel';
import { LoginRepository } from '../infra/LoginRepository';

export const LoginCmd = (form: AuthModel.signinBody) =>
  new LoginRepository().login(form);
