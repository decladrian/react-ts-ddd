import { useEffect } from 'react';
import { container } from '../../../../container';
import { ErrorTypes } from '../../../../shared/domain/error/ErrorTypes';
import { PostController } from '../../application/PostController';
import { PostMapper } from '../../infra/PostMapper';
import { GenericError } from '../../../shared/domain/error/GenericError';
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
    } catch (e: GenericError) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        alert(JSON.stringify(e.errors));
      }
    }
  };

  return { form, changeValue, submit };
};
