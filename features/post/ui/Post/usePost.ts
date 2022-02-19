import { useEffect, useState } from 'react';
import { Subject } from '../../../../shared/infra/observable/Subject';
import { PostController } from '../../application/PostController';
import { PostSubscriber } from '../../infra/PostSbuscriber';

export const usePost = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const mockPostId = 1;
    new PostController().find(mockPostId).then((post) => setPost(post));
    const subscription = PostSubscriber.$subject.subscribe((data) => {
      console.log('Post emit', data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    post,
  };
};
