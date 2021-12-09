import React, {useState} from "react";
import WinterComponent from "./WinterComponent";
const Compo1 = () => {
    console.log('compo1 render')
    return <WinterComponent sx={{color: 'blue'}} imsi={num => console.log(num)}>
        hi
    </WinterComponent>
}
const Compo2 = () => {
    console.log('compo2 render')
    const [state, setState] = useState<number>(0)
    const handleClick = (state:number) => {
        setState(prev => prev + 1);
    }
    return <WinterComponent sx={(theme) => {
        console.log('theme:', theme)
        return {
            // color: 'blue', background: 'pink'
            color: theme.palette.primary.dark,
            // border: `1px solid ${theme.palette.primary.dark}`,
            width: '100px',
            height: '100px',
            border: '1px solid',
            borderColor: 'purple'
        }
    }} imsi={ii => {
        console.log('ii')
        console.log(ii)
    }} >
        hello world
    </WinterComponent>
}
export default () => {
    return <Compo2/>
}