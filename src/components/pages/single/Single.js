import Sidebar from "../../sidebars/Sidebar";
import FirstPost from "../../singlePost/FirstPost";
import "./single.css"

export default function Single({
  onLikeClick,
  deletePost,
  posts
}) {
  return (
    <div className="single">
        <FirstPost onLikeClick={onLikeClick} deletePost={deletePost} />
        <Sidebar />
    </div>
  )
}
