import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
            className="writeImg"
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <input type="text" placeHolder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                    placeHolder="Tell your story..."
                    type="text"
                    className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
