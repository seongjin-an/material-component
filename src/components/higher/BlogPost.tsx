import React from "react";
import DataSource from "./DataSource";
import TextBlock from "./TextBlock";
export interface IPost{
    id: string;
    title: string;
    content: string;
}
interface IProps{
    id: string;
}
interface IState{
    blogPost: IPost;
}
export default class BlogPost extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        });
    }

    render() {
        return <TextBlock text={this.state.blogPost} />;
    }
}