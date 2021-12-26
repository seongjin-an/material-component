import React from "react";
import {WinterOverridableComponent, WinterOverridableTypeMap, WinterOverrideProps} from "./WinterOverridableComponent";

export type ExtendWinterBase<M extends WinterOverridableTypeMap> = ((
    props: {href: string} & WinterOverrideProps<ExtendWinterBaseTypeMap<M>, 'a'>,
) => JSX.Element) &
    WinterOverridableComponent<ExtendWinterBaseTypeMap<M>>;

export interface ExtendWinterBaseTypeMap<M extends WinterOverridableTypeMap>{
    props: M['props'] & Omit<WinterBaseTypeMap['props'], 'classes'>;
    defaultComponent: M['defaultComponent'];
}

export interface WinterBaseTypeMap<P = {}, D extends React.ElementType = 'button'>{
    props: P & {
        children?: React.ReactNode
    }
}
