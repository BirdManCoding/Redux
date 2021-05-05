import axios from "axios";
import { CREATE_POST, FETCH_ALL_POSTS } from "../actions/actionTypes";

export function fetchAllPosts() {
  return async function (dispatch) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
  };
}
