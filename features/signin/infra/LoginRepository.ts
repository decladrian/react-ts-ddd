import { AuthModel } from '../domain/AuthModel';
import { LoginMock } from '../domain/mocks/login';

export class LoginRepository implements AuthModel.useCases {
  login = async (form) => {
    return LoginMock;
  };
}
