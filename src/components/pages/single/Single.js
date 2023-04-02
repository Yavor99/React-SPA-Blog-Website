import Sidebar from "../../sidebars/Sidebar";
import FirstPost from "../../singlePost/FirstPost";
import "./single.css"

export default function Single({onDelete}) {
  return (
    <div className="single">
        <FirstPost onDelete={onDelete}/>
        <Sidebar />
    </div>
  )
}
