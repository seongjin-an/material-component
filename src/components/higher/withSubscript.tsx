import React, {useState} from "react";
import DataSource from "./DataSource";
import {IPost} from "./BlogPost";
interface Options{

}
export interface InjectedProps<S extends {}>{
    data: S
    imsi: number
    func: () => void
}
interface ExternalProps<S extends {}>{
    external: string
    external2: number
    func: () => void
}

interface IState<S extends {}>{
    data: S
}
// 이 함수는 컴포넌트를 매개변수로 받고..
const withSubscript = ({}: Options = {}) =>
    <TOriginalProps extends {}, S extends {}>
    (WrappedComponent: (React.ComponentClass<TOriginalProps & InjectedProps<S>> | React.FunctionComponent<TOriginalProps & InjectedProps<S>>),
     selectData: (ds: DataSource, props?: any) => S
    ) => {
        type ResultProps = TOriginalProps & ExternalProps<S>;
        // ...다른 컴포넌트를 반환하는데...
        const IntermediateComponent: React.FC<ResultProps> = (props) => {
            const [data, setData] = useState<S>(()=>selectData(DataSource, props))
            // ... 래핑된 컴포넌트를 새로운 데이터로 랜더링 합니다!
            //     // 컴포넌트에 추가로 props를 내려주는 것에 주목하세요.
                console.log('withSubscription state:', data);
                console.log('withSubscription props:', props)
                const external = parseInt(props.external);
            return (
                <WrappedComponent data={data} {...props} imsi={external} func={props.func}/>
            )
        };
        return IntermediateComponent
    }
export default withSubscript