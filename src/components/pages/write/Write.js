import { useState } from "react";
import "./write.css";


export default function Write({ onCreatePost }) {
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
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreatePost(values);
    }

    return (
        
        <section id="create-page" className="write">

            <div className="write">
         
                    <img
                        className="writeImg"
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                    />
               

                <form id="create" method="post" onSubmit={onSubmit}>
                    <div className="writeFormGroup">
                        <h1>Tell your story..</h1>

                        <label className="leg-title">Title:</label>
                        <input value={values.title} onChange={onChangeHandler} name="title" type="text" id="title" placeholder="Title"  />

                        <label htmlFor="category">Category:</label>
                        <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

                        <label htmlFor="game-img">Image:</label>
                        <input
                            value={values.imageUrl}
                            onChange={onChangeHandler}
                            type="text" id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />
                        

                        <label htmlFor="description">Write something:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={onChangeHandler}>

                        </textarea>
                        <button className="writeSubmit">Publish</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
