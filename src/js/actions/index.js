import { ADD_ARTICLE } from "../constants/action-types"

export addArticle=(payload) => {
  return {
    type: ADD_ARTICLE, payload
  }
};
