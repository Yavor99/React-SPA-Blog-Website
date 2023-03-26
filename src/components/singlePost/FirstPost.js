import "./firstPost.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as postService from '../../services/postService';

export default function FirstPost() {
	const { postId } = useParams();
	const [post, onePost] = useState({});

	useEffect(() => {
		postService.getOne(postId)
			.then(result => {
				onePost(result);
			})
	}, [postId])


	return (
		<div className="firstPost">
			<div className="singlePostWrapper">
				{post.imageUrl && (
					<img
						src={post.imageUrl}
						alt=""
						className="firstPostImg"
					/>
				)}
				
				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
						<i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>{post.username}</b>
					</span>
					<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="singlePostDesc">
					{post.description}
				</p>
			</div>
		</div>
	)
}
