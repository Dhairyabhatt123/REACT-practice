import { useState } from "react";
import CommentsForm from "./commentform";
import NewCommentsForm from "./newCommentform";
export default function Comment() {
    let [comments, setcomments] = useState([
        {
            userName: "dahirya",
            remarks: "Bhot acha",
            ratings: 3
        }
    ]);

    // Function to add a new comment
    let addNewComment = (comment) => {
        setcomments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <div className="text-6xl">ALL Comments</div>
            <br /><br />
            
            {comments.map((comment, idx) => (
                <div key={idx} className="text-3xl border-white border rounded-2xl p-4 m-4">
                    <span>{comment.remarks}</span>
                    <span> (Rating = {comment.ratings})</span>
                    <p>{comment.userName}</p>
                </div>
            ))}

            {/* <CommentsForm addNewComment={addNewComment} /> */}
            <NewCommentsForm addNewComment={addNewComment} />
        </>
    );
}
