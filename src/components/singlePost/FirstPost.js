import "./firstPost.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import * as postService from '../../services/postService';
import { AuthContext } from "../../context/AuthContext";

export default function FirstPost() {
	const {userId, userUsername} = useContext(AuthContext);
	const { postId } = useParams();
	const [post, onePost] = useState({});

	useEffect(() => {
		postService.getOne(postId)
			.then(result => {
				onePost(result);
			})
	}, [postId]);

	const isOwner = post._ownerId === userId;
	let owner;

	if(isOwner) {
		owner = userUsername;
	}
	


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
					{isOwner && (
						<div className="singlePostEdit">
							<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
							<i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
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
			</div>
		</div>
	)
}
