import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useService } from "../../../hooks/UseService";

import { postServiceFactory } from "../../../services/postService";


export const EditPost = ({ onEditForm }) => {
    const { postId } = useParams();
    const postService = useService(postServiceFactory)
    
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: postId,
        title: '',
        description: '',
        imageUrl: '',
    }, onEditForm); 

    useEffect(() => {
		postService.getOne(postId)
			.then(result => {
				changeValues(result);
			})
	}, [postId]);

    return (
        <div className="write">

            <img
                className="writeImg"
                src={values.imageUrl}
                alt=""
            />

            <form className="writeForm" method="POST" onSubmit={onSubmit}>
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput">
                        <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                    </label> */}
                    
                    <input value={values.title} onChange={changeHandler} name="title" type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    <input value={values.category} onChange={changeHandler} name="category" type="text" placeholder="Category" className="writeInput" />
                    <input value={values.imageUrl} onChange={changeHandler} name="imageUrl" placeholder="imageUrl" type="text" className="writeInput"/>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        value={values.description}
                        onChange={changeHandler}
                        name="description"
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
};