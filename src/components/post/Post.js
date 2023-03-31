import { Link } from "react-router-dom"
import "./post.css"

export default function Post({
    _id,
    title,
    description,
    imageUrl,
    category
}) {
    return (
        <div className="post">
            
                <img
                    className="postImg"
                    src={imageUrl}
                    alt="https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg"
                />
            
            <div className="postInfo">
                <div className="postCat">
                    
                        <span className="postCat">Category:{category}</span>
                    
                </div>
                <Link to={`/post/${_id}`} className="link">
                <span className="postTitle">
                    {title}
                </span>
                </Link>
                <hr />
            </div>
            <p className="postDesc">
                {description}
            </p>
        </div>
    )
}
