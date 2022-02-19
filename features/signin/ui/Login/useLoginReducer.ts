import { useReducer } from 'react';
import { AuthModel } from '../../domain/AuthModel';

export const useLoginReducer = () => {
  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value };
  };

  const initialState: AuthModel.signinBody = { email: '', password: '' };

  const [form, dispatch] = useReducer(reducer, initialState);

  const updateInput = (key: AuthModel.key, value: any) =>
    dispatch({ key, value });

  return { form, updateInput };
};
