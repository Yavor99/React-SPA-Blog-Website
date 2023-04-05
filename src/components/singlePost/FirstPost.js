import "./firstPost.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import * as postService from '../../services/postService';
import { AuthContext } from "../../context/AuthContext";

export default function FirstPost({ onDelete }) {
	const { userId, userUsername, isAuth, token, likeClick } = useContext(AuthContext);
	const { postId } = useParams();

	const [post, onePost] = useState({});

	const [likes, setLikes] = useState(0);
	const [isClicked, setIsClicked] = useState(true);

	
	useEffect(() => {
		postService.getOne(postId)
			.then(result => {
				onePost(result);
			})
	}, [postId]);


	const isOwner = post._ownerId === userId;

	let owner;

	if (isOwner) {
		owner = userUsername;
	} else {
		owner = post._ownerId;
	};

	const onUpLikes = (e) => {
		if (isClicked) {
			setLikes(likes + 1);			
		} else {
			setLikes(likes - 1);
		};
		setIsClicked(!isClicked);

		likeClick(post._id, likes);
	};


	const submetDelete = (e) => {
		e.preventDefault();

		onDelete(post._id, token);
	};


	return (
		<div className="firstPost">
			<div className="singlePostWrapper">
				{post.imageUrl && (
					<img
						src={post.imageUrl}
						alt="https://images.pexels.com/photos/12988675/pexels-photo-12988675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						className="firstPostImg"
					/>
				)}

				<h1 className="singlePostTitle">
					{post.title}

					<div className="categoryInfo">
						<span>
							Category: {post.category}
						</span>
					</div>

					{isOwner && (
						<div className="singlePostEdit">
							<Link to={`/post/${post._id}/edit`} ><i className="singlePostIcon fa-solid fa-pen-to-square"></i></Link>
							<i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={submetDelete}></i>
						</div>
					)}


					{!isOwner && (
						<div className="singlePostLike">
							
								<div className="Likes">
									<span>
										Likes: {likes}
									</span>
								</div>
							

							{isClicked && (
								<i className="like-button fa-regular fa-thumbs-up"
									   onClick={onUpLikes}									
								></i>
							)}
							{!isClicked && (
								<i class="disLike-button fa-solid fa-thumbs-down"
									   onClick={onUpLikes}									
								></i>
							)}
						</div>
					)}

				</h1>
				{userUsername && (
					<div className="singlePostInfo">
						<span className="singlePostAuthor">
							Author: <b>{owner}</b>
						</span>
					</div>
				)}

				<p className="singlePostDesc">
					{post.description}
				</p>

				{/* <form className="form" >
                    <input type="text" name="username" placeholder='Пешо' />
                    <textarea name="comment" placeholder="Comment......" ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form> */}
			</div>
		</div>
	)
}
