import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCat">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsun dolor sit amet
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        1 540 зрелостници са подали заявления за допускане до държавния зрелостен изпит по български език и литература на 19 май в Хасковска област, съобщиха за Haskovo.info от Регионалното управление на образованието. И тази година матурата включва 40 задачи с избираем отговор, кратък свободен отговор и разширен свободен отговор създаване на…
        </p>
    </div>
  )
}
