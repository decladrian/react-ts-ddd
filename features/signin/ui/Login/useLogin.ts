import { LoginController } from '../../application/LoginController';
import { useLoginReducer } from './useLoginReducer';

export const useLogin = () => {
  const { form, updateInput } = useLoginReducer();

  const submit = async () => {
    const { success, ...user } = await new LoginController().login(form);
    if (success) {
      alert(JSON.stringify({ user }));
    }
  };

  return {
    form,
    submit,
    updateInput,
  };
};
