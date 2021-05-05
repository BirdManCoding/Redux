import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { fetchAllPosts } from "./actions/postAction";
import Router from "./Router";

function App() {
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.item);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch, post]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
