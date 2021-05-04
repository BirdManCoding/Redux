import axios from "axios";
import React, { useState } from "react";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body: content,
    });

    console.log(res);
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
