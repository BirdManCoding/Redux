import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllPosts } from "./actions/postAction";
import Blog from "./components/Blog";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className='App'>
      <Blog />
    </div>
  );
}

export default App;
