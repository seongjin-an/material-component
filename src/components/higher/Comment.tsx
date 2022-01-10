import React from "react";
import {IComment} from "./CommentList";

interface IProps{
    comment: IComment
}
const Comment: React.FC<IProps> = ({comment}) => {
    return(
        <>
            <div>id: {comment.id}</div>
            <div>{comment.content}</div>
        </>
    )
}
export default Comment;