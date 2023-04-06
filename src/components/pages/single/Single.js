import Sidebar from "../../sidebars/Sidebar";
import FirstPost from "../../singlePost/FirstPost";
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <FirstPost />
        <Sidebar />
    </div>
  )
}
