import { PostModels } from "../domain/PostModels";

export class PostMapper {

  static modelToDto(model: PostModels.model): PostModels.rawModel {
    return {
      ...model,
      created_at: ""
    }
  }

  static dtoToModel(rawModel: PostModels.rawModel): PostModels.model {
    return {
      ...rawModel,
      created_at: new Date(),
    }
  }
}