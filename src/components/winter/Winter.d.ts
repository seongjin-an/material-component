import React from "react";
import {ExtendWinterBase} from "./WinterBase";

export interface WinterTypeMap<P = {}, D extends React.ElementType = 'button'>{
    props: P & {
        children?: React.ReactNode
    }
}

declare const Button: ExtendWinterBase<WinterTypeMap>
export default Button;