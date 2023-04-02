import "./write.css";

import { useForm } from "../../../hooks/useForm";
import { useState } from "react";


export default function Write({ onCreatePost }) {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        description: '',
        imageUrl: '',
    }, onCreatePost);


    return (

        <div className="write">

            <img
                className="writeImg"
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
            />

            <form className="writeForm" method="POST" onSubmit={onSubmit}>
                <div className="writeFormGroup">
                    
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
}
