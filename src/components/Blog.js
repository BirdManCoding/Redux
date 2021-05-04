import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogForm from "./BlogForm";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    })();
  }, []);

  function BlogPosts() {
    const postItems = posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr />
      </div>
    ));
    return postItems;
  }

  return (
    <div>
      <h1>Blog</h1>
      <BlogForm />
      <BlogPosts />
    </div>
  );
}

export default Blog;
