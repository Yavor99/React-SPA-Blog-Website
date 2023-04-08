import "./firstPost.css";
import { Link, useParams, useNavigate, Form } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { postServiceFactory } from '../../services/postService';
import { AuthContext } from "../../context/AuthContext";
import { useService } from "../../hooks/UseService";
import * as commentService from "../../services/commentService";

import { Comments } from "./comments/Comments";

export default function FirstPost({
	onLikeClick,
	deletePost,
}) {
	const { userId, userUsername, isAuth } = useContext(AuthContext);
	const { postId } = useParams();
	const postService = useService(postServiceFactory);
	const navigate = useNavigate();

	const [post, onePost] = useState({});

	const [like, setLikes] = useState(0);
	const [isClicked, setIsClicked] = useState(true);


	useEffect(() => {
		Promise.all([
			postService.getOne(postId),
			commentService.getAll(postId),
		]).then(([postData, comments]) => {
			onePost({
				...postData,
				comments,
			});
		});
	}, [postId]);

	const onCommentSubmit = async (values) => {
		const response = await commentService.create(postId, values.comment);

		onePost(state => ({
			...state,
			comments: [...state.comments, response],
		}));
	};


	const isOwner = post._ownerId === userId;

	let owner;

	if (isOwner) {
		owner = userUsername;
	} else {
		owner = post._ownerId;
	};



	const onUpLikes = (e) => {
		if (isClicked) {
			setLikes(like + 1)
		} else {
			setLikes(like - 1)
		};
		setIsClicked(!isClicked);


	};

	// const likeClick = async (postId) => {
	// 	await likeService.like(postId, like)

	// 	console.log(postId);
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


					{!isOwner && isAuth && (
						<div className="singlePostLike">

							<div className="Likes">
								<span>
									Likes: {like}
								</span>
							</div>


							{isClicked && (
								<i className="like-button fa-regular fa-thumbs-up"
									// onClick={() => onLikeClick(post._id, post.likes += 1)}
									onClick={onUpLikes}
								// value={like}
								// onChange={changeHandler}
								></i>
							)}
							{!isClicked && (
								<i className="disLike-button fa-solid fa-thumbs-down"
									// onClick={() => onLikeClick(post._id, post.likes -= 1)}
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

				{isAuth && (
					<>
						<Comments onCommentSubmit={onCommentSubmit} />
					</>
				)}

				{/* {isAuth && ( */}
					<div className="comment-container">
						<h2>Comments:</h2>
						<ul>
							{post.comments && post.comments?.map(x => (
								<li key={x._id}>
									<p>{x.comment}</p>
								</li>
							))}
						</ul>
					</div>
				{/* )} */}


			</div>
		</div>
	)
}
