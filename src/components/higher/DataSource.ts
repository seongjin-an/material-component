import {IComment} from "./CommentList";
import {IPost} from "./BlogPost";

export default class DataSource{
    public static getComments(): IComment[]{
        return [
            {id: '000000', content: '000000'},
            {id: '999999', content: '999999'}
            ]
    }
    public static getBlogPost(id: string): IPost{
        return {id: id, title: '11', content: '11111'}
    }
    public static addChangeListener(fun: () => void):void{

    }
    public static removeChangeListener(func: ()=>void):void{

    }
}