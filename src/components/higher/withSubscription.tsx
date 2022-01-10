import React from "react";
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
const withSubscription = ({}: Options = {}) =>
    <TOriginalProps extends {}, S extends {}>
    (WrappedComponent: (React.ComponentClass<TOriginalProps & InjectedProps<S>> | React.FunctionComponent<TOriginalProps & InjectedProps<S>>),
                   selectData: (ds: DataSource, props?: any) => S
) => {
    type ResultProps = TOriginalProps & ExternalProps<S>;
    // ...다른 컴포넌트를 반환하는데...
    return class extends React.Component<ResultProps, IState<S>> {
        constructor(props: ResultProps) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ... 구독을 담당하고...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            // ... 래핑된 컴포넌트를 새로운 데이터로 랜더링 합니다!
            // 컴포넌트에 추가로 props를 내려주는 것에 주목하세요.
            console.log('withSubscription state:', this.state);
            console.log('withSubscription props:', this.props)
            const external = parseInt(this.props.external);
            return <WrappedComponent data={this.state.data} {...this.props} imsi={external} func={this.props.func}/>
        }
    };
}
export default withSubscription