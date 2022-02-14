import { AuthModel } from '../domain/AuthModel';
import { LoginMock } from '../domain/mocks/login';

export class LoginRepository implements AuthModel.repository {
  login = async (form) => {
    return LoginMock;
  };
}
