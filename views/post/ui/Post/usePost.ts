import { useEffect, useState } from 'react';
import { PostQry } from '../../application/post-qry';

export const usePost = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    PostQry(1).then((post) => setPost(post));
  }, []);

  return {
    post,
  };
};
