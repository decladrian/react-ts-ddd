import { useReducer } from 'react';
import { PostModels } from '../../domain/PostModels';

export const usePostFormReducer = () => {
  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value, created_at: new Date() };
  };

  const initForm = { title: '', content: '', created_at: new Date() };

  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: PostModels.key, value: any) => {
    dispatch({ key, value });
  };

  return {
    form,
    dispatch,
    changeValue,
  };
};
