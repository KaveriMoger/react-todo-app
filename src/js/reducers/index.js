import { ADD_ARTICLE } from "../constants/action-types"
const initialState = {
  articles: [
    {id:1, name: "A", age:"25"},
    {id:2, name: "B", age:"26"},
    {id:3, name: "C", age:"27"},
    {id:4, name: "D", age:"28"},
    {id:5, name: "E", age:"29"},
  ]
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer
