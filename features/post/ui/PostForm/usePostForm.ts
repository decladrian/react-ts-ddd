import { useEffect, useState } from 'react';
import { container } from '../../../../container';
import { ErrorTypes } from '../../../../shared/domain/error/ErrorTypes';
import { PostController } from '../../application/PostController';
import { PostMapper } from '../../infra/PostMapper';
import { usePostFormReducer } from './usePostFormReducer';

export const usePostForm = (navigate) => {
  const [errors, setErrors] = useState<any>({});
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
    setErrors({});
    try {
      const result = await new PostController().save(mappedPost);
      navigate('post');
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        alert(JSON.stringify(e.errors));
        setErrors(e.errors);
      }
    }
  };

  return { form, changeValue, submit, errors };
};
