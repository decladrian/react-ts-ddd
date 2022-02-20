import { useEffect } from 'react';
import { container } from '../../../../container';
import { PostController } from '../../application/PostController';
import { PostMapper } from '../../infra/PostMapper';
import { usePostFormReducer } from './usePostFormReducer';

export const usePostForm = (navigate) => {
  useEffect(() => {
    const subscription = container.postSubscriber.$subject.subscribe(
      (data: object) => {}
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const { form, changeValue } = usePostFormReducer();

  const submit = async () => {
    const mappedPost = new PostMapper().formToDTO(form);
    try {
      const result = await new PostController().save(mappedPost);
      navigate('post');
    } catch (e: any) {
      if (e.type === 'invalid_data') {
        alert(JSON.stringify(e.errors));
      }
    }
  };

  return { form, changeValue, submit };
};
