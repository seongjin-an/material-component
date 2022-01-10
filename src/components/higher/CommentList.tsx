import React from 'react';
import DataSource from "./DataSource";
import Comment from './Comment'
import withSubscription from "./withSubscription";
export interface IComment{
    id: string;
    content: string;
}
interface IProps{

}
interface IState{
    comments: IComment[]
}
export default class CommentList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // "DataSource" 는 글로벌 데이터 소스입니다.
            comments: DataSource.getComments()
        };
    }

    componentDidMount() {
        // 변화감지를 위해 리스너를 추가합니다.
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // 리스너를 제거합니다.
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        // 데이터 소스가 변경될때 마다 comments를 업데이트합니다.
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}

            </div>
        );
    }
}
