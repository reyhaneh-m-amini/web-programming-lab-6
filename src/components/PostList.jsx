import Post from "./Post";

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default PostList;
