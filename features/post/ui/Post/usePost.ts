import { useEffect, useState } from 'react';
import { PostQry } from '../../application/post-qry';

export const usePost = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const mockPostId = 1;
    PostQry(mockPostId).then((post) => setPost(post));
  }, []);

  return {
    post,
  };
};
