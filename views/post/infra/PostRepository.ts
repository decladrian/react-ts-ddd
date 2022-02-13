import { PostModels } from '../domain/PostModels';

export class PostRepository implements PostModels.repository {
  fetch = async (id: number) => {
    return {
      id,
      user: 10,
      title: 'Hola mama',
      content: 'Contenido',
      created_at: '2022-10-01',
    };
  };

  findAll = async () => {
    return [
      {
        id: 1,
        user: 10,
        title: 'Hola mama',
        content: 'Contenido',
        created_at: '2022-10-01',
      },
    ];
  };

  save = async (post) => {
    return { success: true };
  };
}
