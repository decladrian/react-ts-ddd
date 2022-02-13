import { useReducer } from 'react';
import { PostSaveCmd } from '../../application/post-save-cmd';
import { PostModels } from '../../domain/PostModel';
import { PostMapper } from '../../infra/PostMapper';

export const usePostForm = () => {
  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value, created_at: new Date() };
  };

  const initForm = { title: '', content: '', created_at: new Date() };

  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: PostModels.key, value: any) => {
    dispatch({ key, value });
  };

  const submit = () => {
    const mappedPost = new PostMapper().formToDTO(form);
    PostSaveCmd(mappedPost).then((result) => alert(JSON.stringify(result)));
  };

  return { form, changeValue, submit };
};
