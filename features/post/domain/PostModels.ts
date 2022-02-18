import { SemanticTypes } from '../../../shared/domain/SemainticType';

export namespace PostModels {
  export interface model {
    id: SemanticTypes.ID;
    user: SemanticTypes.ID;
    title: string;
    content: string;
    created_at: SemanticTypes.DATEFORMAT_YYYY_MM_DDD;
  }

  export type collection = model[];

  export type key = keyof model;

  export type saveResponse = { success: boolean };

  export type likeResponse = { success: boolean; like: boolean };

  export type saveRequest = {
    id?: SemanticTypes.ID;
    title: string;
    content: string;
    created_at: SemanticTypes.DATEFORMAT_YYYY_MM_DDD;
  };

  export type likeBody = { id: SemanticTypes.ID };

  export interface useCases {
    fetch: (id: SemanticTypes.ID) => Promise<model>;
    findAll: () => Promise<collection>;
    save: (post: saveRequest) => Promise<saveResponse>;
    like: (id: SemanticTypes.ID) => Promise<likeResponse>;
  }
}
