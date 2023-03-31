import "./write.css";

import { useForm } from "../../../hooks/useForm";


export default function Write({ onCreatePost }) {
    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        category: '',
        description: '',
        imageUrl: '',
    }, onCreatePost);


    return (
        
        <section id="create-page" className="write">

            <div className="write">
         
                    <img
                        className="writeImg"
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                    />
               

                <form id="create" method="POST" onSubmit={onSubmit}>
                    <div className="writeFormGroup">
                        <h1>Tell your story..</h1>

                        <label className="leg-title">Title:</label>
                        <input value={values.title} onChange={changeHandler} name="title" type="text" id="title" placeholder="Title"  />

                        <label htmlFor="category">Category:</label>
                        <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

                        <label htmlFor="game-img">Image:</label>
                        <input
                            value={values.imageUrl}
                            onChange={changeHandler}
                            type="text" id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />
                        

                        <label htmlFor="description">Write something:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={changeHandler}>

                        </textarea>
                        <button className="writeSubmit">Publish</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
