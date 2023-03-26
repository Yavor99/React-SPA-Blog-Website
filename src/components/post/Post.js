import { Link } from "react-router-dom"
import "./post.css"

export default function Post({
    _id,
    title,
    createdAt,
    description,
    imageUrl,
    categories
}) {
    return (
        <div className="post">
            {imageUrl && (
                <img
                    className="postImg"
                    src={imageUrl}
                    alt="https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg"
                />
            )}
            <div className="postInfo">
                <div className="postCat">
                    {/* {categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))} */}
                </div>
                <Link to={`/post/${_id}`} className="link">
                <span className="postTitle">
                    {title}
                </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {description}
            </p>
        </div>
    )
}
