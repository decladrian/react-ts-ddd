import { useReducer } from 'react';
import { Analitics } from '../../../../shared/infra/utils/Analitycs';
import { LoginCmd } from '../../application/login-cmd';
import { AuthModel } from '../../domain/AuthModel';

export const useLogin = () => {
  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value };
  };

  const initialState: AuthModel.signinBody = { email: '', password: '' };

  const [form, dispatch] = useReducer(reducer, initialState);

  const updateInput = (key: AuthModel.key, value: any) =>
    dispatch({ key, value });

  const submit = async () => {
    const { success, ...user } = await LoginCmd(form);
    if (success) {
      alert(JSON.stringify({ user }));
      Analitics.send('LOGIN_USER', user);
    }
  };

  return {
    form,
    submit,
    updateInput,
  };
};
