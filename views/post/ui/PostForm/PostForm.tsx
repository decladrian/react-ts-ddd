import React, { ReactNode } from 'react';
import { usePostForm } from '../PostForm/usePostForm';

export const PostForm: ReactNode = ({navigate}) => {
  const { form, changeValue, submit } = usePostForm(navigate);

  return (
    <div>
      <p>
        Título{' '}
        <input
          value={form.title}
          onChange={(e) => changeValue('title', e.currentTarget.value)}
        />
      </p>
      <p>
        Contenido{' '}
        <input
          value={form.content}
          onChange={(e) => changeValue('content', e.currentTarget.value)}
        />
      </p>

      <button onClick={submit}>Enviar</button>
    </div>
  );
};
