import { CREATE_POST, FETCH_ALL_POSTS } from "../actions/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return state;
    default:
      return state;
  }
};

export default reducer;
