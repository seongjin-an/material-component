import React from "react";
import withSubscription, {InjectedProps} from "./withSubscription";
import {IComment} from "./CommentList";
import DataSource from "./DataSource";
interface IProps{

}
const AwesomeCommentList: React.FC<IProps & InjectedProps<IComment[]>> = (props) => {
    console.log('AwesomeCommentList props:', props)
    const {data, func} = props//data, imsi, external, external2
    return(
        <>
            {data.map((dat, index) => (
                <>
                    <div onClick={func}>{dat.id}</div>
                    <div>{dat.content}</div>
                </>
            ))}
        </>
    )
}
const comments: IComment[] = [
    {id: '111', content: '111'},
    {id: '222', content: '222'}
]
const HOCExample = withSubscription()(AwesomeCommentList, ds => DataSource.getComments())
const HocReal = () => {
    const func = () => console.log('hhhhhhhiiiiiiiiii');
    return(
        <HOCExample data={comments} imsi={1} external={'999'} external2={1111} func={func}/>
    )
}
export default HocReal