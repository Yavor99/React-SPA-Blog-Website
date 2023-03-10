import "./firstPost.css"

export default function FirstPost() {
  return (
    <div className="firstPost">
        <div className="singlePostWrapper">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            className="firstPostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipusn dotor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author: <b>Yavor</b>
              </span>
              <span className="singlePostDate">1 Hour ago</span>
          </div>
          <p className="singlePostDesc">
          Jane Austen was an English novelist known primarily for her six major novels,
           which interpret, critique, and comment upon the British landed gentry at the end of 
           the 18th century. Austen's plots often explore the dependence of women on marriage in
            the pursuit of favourable social standing and economic security. Her works critique the 
            novels
          </p>
        </div>
    </div>
  )
}
