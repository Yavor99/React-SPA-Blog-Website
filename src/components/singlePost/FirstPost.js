import "./firstPost.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { postServiceFactory } from '../../services/postService';
import { AuthContext } from "../../context/AuthContext";
import { useService } from "../../hooks/UseService";

export default function FirstPost({
	onLikeClick,
	deletePost
}) {
	const { userId, userUsername, isAuth } = useContext(AuthContext);
	const { postId } = useParams();
	const postService = useService(postServiceFactory);
	const navigate = useNavigate();

	const [post, onePost] = useState({});

	// const [likes, setLikes] = useState(0);
	const [isClicked, setIsClicked] = useState(true);

	let likes = [];
	for(let i = 0; i < post.likes; i++);

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

	// const onUpLikes = (e) => {
	// 	if (isClicked) {
	// 		setLikes(likes + 1);
	// 	} else {
	// 		setLikes(likes - 1);
	// 	};
	// 	setIsClicked(!isClicked);

	// 	likeClick(post._id, likes);
	// };


	const onDeleteClick = async () => {
		if (window.confirm("Are you sure you want to delete this post?")) {
			await postService.delete(post._id);

			deletePost(post._id);

			navigate('/');
		};
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
							<i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={onDeleteClick}></i>
						</div>
					)}


					{!isOwner && (
						<div className="singlePostLike">

							<div className="Likes">
								<span>
									Likes: {post.likes}
								</span>
							</div>


							{isClicked && (
								<i className="like-button fa-regular fa-thumbs-up"
									onClick={() => onLikeClick(post._id)}
								></i>
							)}
							{!isClicked && (
								<i class="disLike-button fa-solid fa-thumbs-down"
									onClick={() => onLikeClick(post._id)}
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
