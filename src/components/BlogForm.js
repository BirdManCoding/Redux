import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createPost } from "../actions/postAction";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  async function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(createPost({ title, body: content }));
  }

  return (
    <div>
      <h1>BlogForm</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          type='text'
          value={title}
        />
        <textarea
          onChange={e => setContent(e.target.value)}
          placeholder='Content'
          type='text'
          value={content}
        />
        <button>Send Post</button>
      </form>
      <hr />
      <hr />
    </div>
  );
}

export default BlogForm;
