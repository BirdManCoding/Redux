import { useSelector } from "react-redux";

function BlogPosts() {
  const posts = useSelector(state => state.posts);

  const postItems = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr />
    </div>
  ));
  return postItems;
}
export default BlogPosts;
