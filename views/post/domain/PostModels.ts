export namespace PostModels {
  export interface model {
    id: number;
    user: number;
    title: string;
    content: string;
    created_at: string;
  }

  export type collection = model[];

  export type key = keyof model;

  export type saveResponse = { success: boolean };

  export type saveBody = {
    id?: number;
    title: string;
    content: string;
    created_at: string;
  };

  export interface repository {
    fetch: (id: number) => Promise<model>;
    findAll: () => Promise<collection>;
    save: (post: saveBody) => Promise<saveResponse>;
  }
}
