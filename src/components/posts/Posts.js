import Post from "../post/Post"
import "./posts.css"

export default function Posts({
  posts
}) {
  return (
    <div className="posts">
      {posts.map(p => <Post key={p._id} {...p}/>)}

      {posts.length === 0 && (
        <h3 className="no-posts">No Posts</h3>
      )}
    </div>
  )
}
