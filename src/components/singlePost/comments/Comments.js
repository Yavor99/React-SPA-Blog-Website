import { useForm } from "../../../hooks/useForm"

export const Comments = ({
    onCommentSubmit
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <div className="main-container">
            <h3 className="comment-text">Add Comment</h3>
            <form onSubmit={onSubmit}>
                <div className="comment-flexbox">
                    <textarea className="input-box" name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}/>
                    <button className="comment-button">Submit</button>
                </div>
            </form>
        </div>
    )
}