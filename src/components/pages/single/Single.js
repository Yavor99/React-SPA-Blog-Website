import Sidebar from "../../sidebars/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
    </div>
  )
}
