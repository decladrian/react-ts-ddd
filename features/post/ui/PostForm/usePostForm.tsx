import { useEffect, useReducer } from 'react';
import { PostController } from '../../application/PostController';
import { PostModels } from '../../domain/PostModels';
import { PostMapper } from '../../infra/PostMapper';
import { PostSubscriber } from '../../infra/PostSbuscriber';

export const usePostForm = (navigate) => {
  useEffect(() => {
    const subscription = PostSubscriber.$subject.subscribe((data) => {
      console.log('Post emit', data);
    });
    return () => {
      subscription.unsubscribe();
    };
  });

  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value, created_at: new Date() };
  };

  const initForm = { title: '', content: '', created_at: new Date() };

  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: PostModels.key, value: any) => {
    dispatch({ key, value });
  };

  const submit = async () => {
    const mappedPost = new PostMapper().formToDTO(form);
    try {
      const result = await new PostController().save(mappedPost);
      navigate('post');
    } catch (e: any) {
      alert(JSON.stringify({ e }));
    }
  };

  return { form, changeValue, submit };
};
