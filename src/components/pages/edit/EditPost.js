import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import * as postService from "../../../services/postService";


export const EditPost = ({ onEditForm }) => {
    const { postId } = useParams();
    const [post, setPostEdit] = useState({});

    const { values, changeHandler, onSubmit } = useForm({
        _id: postId,
        title: '',
        description: '',
        imageUrl: '',
    }, onEditForm); 

    useEffect(() => {
		postService.getOne(postId)
			.then(result => {
				setPostEdit(result);
			})
	}, [postId]);

    return (
        <section id="edit-page" className="edit">

        <div className="edit">
     
                <img
                    className="writeImg"
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                />
           

            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className="writeFormGroup">
                    <h1>Tell your story..</h1>

                    <label className="leg-title">Title:</label>
                    <input
                        value={values.title}
                        onChange={changeHandler}
                        name="title"
                        type="text"
                        id="title" 
                        placeholder={post.title}  
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        value={values.category}
                        onChange={changeHandler}
                        type="text"
                        id="category"
                        name="category"     
                        placeholder={post.category} 
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        value={values.imageUrl}
                        onChange={changeHandler}
                        type="text" id="imageUrl"
                        name="imageUrl"
                        placeholder={post.imageUrl}
                    />
                    

                    <label htmlFor="description">Write something:</label>
                    <textarea
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={changeHandler}
                        placeholder={post.description}
                    >
                    </textarea>

                    <button className="writeSubmit">Edit</button>
                </div>
            </form>
        </div>
    </section>
    )
};