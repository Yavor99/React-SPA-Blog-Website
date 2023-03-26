import { useState } from "react";
import "./write.css";


export default function Write({onCreatePost}) {
    const [values, setValues] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });

    if (values.imageUrl) {
        const data = new FormData();
        const fileName = Date.now() + values.imageUrl.name;
        data.append("name", fileName);
        data.append("file", values.imageUrl);
    }

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreatePost(values);
    }

  return (
    <div className="write">
        {values.imageUrl && (
            <img
                className="writeImg"
                src={values.imageUrl}
                alt="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
        )}
        
        <form className="writeForm" onSubmit={onSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input value={values.imageUrl} onChange={onChangeHandler} name="imageUrl"  type="file" id="fileInput" style={{display:'none'}}/>
                <input value={values.title} onChange={onChangeHandler} name="title" type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                    value={values.description}
                    onChange={onChangeHandler}
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
