export namespace AuthModel {
  export interface model {
    success: boolean;
    token: string;
    username: string;
  }

  export interface signinBody {
    email: string;
    password: string;
  }

  export type key = keyof signinBody;

  export interface useCases {
    login: (form: signinBody) => Promise<model>;
  }
}
