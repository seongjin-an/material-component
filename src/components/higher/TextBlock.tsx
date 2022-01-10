import React from "react";
import {IPost} from "./BlogPost";
interface IProps{
    text: IPost
}

const TextBlock: React.FC<IProps> = ({text}) => {
    return(
        <>
            <div>id: {text.id}</div>
            <div>{text.title}</div>
            <div>{text.content}</div>
        </>
    )
}
export default TextBlock;