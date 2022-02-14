import { useReducer } from 'react';
import { Analytics } from '../../../../shared/infra/utils/Analytics';
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
      Analytics.send('LOGIN_USER', user);
    }
  };

  return {
    form,
    submit,
    updateInput,
  };
};
