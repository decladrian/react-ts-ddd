import { useEffect, useState } from 'react';
import { PostController } from '../../application/PostController';

export const usePost = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const mockPostId = 1;
    new PostController().fetch(mockPostId).then((post) => setPost(post));
  }, []);

  return {
    post,
  };
};
