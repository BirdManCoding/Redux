import axios from "axios";
import { CREATE_POST, FETCH_ALL_POSTS } from "../actions/actionTypes";

export function fetchAllPosts() {
  console.log("fetching the Posts Action");
  return async function (dispatch) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
  };
}

export function createPost(postData) {
  console.log("create a Post Action");
  return async function (dispatch) {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    dispatch({ type: CREATE_POST, payload: data });
  };
}
