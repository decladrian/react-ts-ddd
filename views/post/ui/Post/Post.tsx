import React, { ReactNode } from 'react';
import { usePost } from '../Post/usePost';

export const Post: ReactNode = () => {
  const { post } = usePost();

  return (
    <main>
      <ul>
        <li>{post.title}</li>
        <li>{post.content}</li>
        <li>{post.created_at}</li>
      </ul>
    </main>
  );
};
