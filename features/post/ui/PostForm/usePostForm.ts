import { useEffect, useState } from 'react';
import { container } from '../../../../container';
import { ErrorTypes } from '../../../../shared/domain/error/ErrorTypes';
import { PostController } from '../../application/PostController';
import { PostValidator } from '../../application/PostValidator';
import { usePostFormReducer } from './usePostFormReducer';

export const usePostForm = (navigate) => {
  const [errors, setErrors] = useState<any>({});
  const [postErrors, setPostErrors] = useState<PostModels.errors>({});
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
    setErrors({});
    const validator = new PostValidator(form);
    if (!validator.validate()) {
      setPostErrors({ ...validator.getErrors() });
      return;
    }
    try {
      const result = await new PostController().save(form);
      navigate('post');
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        alert(JSON.stringify(e.errors));
        setErrors(e.errors);
      }
    }
  };

  return { form, changeValue, submit, errors, postErrors, setPostErrors };
};
