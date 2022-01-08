import React, {useState, MouseEvent} from "react";
import styled from "@emotion/styled";
import {SxProps} from "./sx";
import {Theme} from "./Theme";
import {customTheme} from "../../data/Theme";

interface IProps {
    sx: SxProps<Theme>
    imsi: (num: number) => void;
}
const Container = styled.div<{sx: SxProps<Theme>|null}>`
    ${props => {
        return {...props.sx}
    }};
`
interface IColor {
    [index:string]: string;
}
const WinterComponent:React.FC<IProps> = ({imsi,children, sx}) => {
    console.log(typeof sx);
    const [num, setNum] = useState<number>(0);
    // const [theme, setTheme] = useState<Theme>()
    // const theme: Theme = {palette: {primary: {light: "orange", dark: "red"} }};

    const handleClick = () => {
        console.log('winter')
        setNum(prev => prev+1)
        return imsi(num)
    }
    if(typeof sx === 'function') {
        return <Container sx={sx(customTheme)}>
            {children}
        </Container>
    }
    return<Container sx={sx}>
        {children}
        <button onClick={handleClick}>imsi</button>
    </Container>
}

export default WinterComponent