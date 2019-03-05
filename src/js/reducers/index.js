import { ADD_ARTICLE } from "../constants/action-types"
const initialState = {
  articles: [
    {id:1, title: "A", age:"25"},
    {id:2, title: "B", age:"26"},
    {id:3, title: "C", age:"27"},
    {id:4, title: "D", age:"28"},
    {id:5, title: "E", age:"29"},
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
