import { CREATE_POST, FETCH_ALL_POSTS } from "../actions/actionTypes";

const initialState = {
  items: [],
  item: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      console.log("fetching the Posts Reducer");
      return { ...state, items: action.payload };
    case CREATE_POST:
      console.log("create a Post Reducer");
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

export default reducer;
