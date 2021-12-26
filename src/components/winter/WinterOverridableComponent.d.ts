import React from "react";
import {WinterStyledComponentProps} from "./styled";

export interface WinterOverridableTypeMap{
    props: {};
    defaultComponent: React.ElementType;
}

export type WinterOverrideProps<
    M extends WinterOverridableTypeMap,
    C extends React.ElementType
> = (
    & FundamentProps<M>
    & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof FundamentProps<M>>
)

export interface WinterOverridableComponent<M extends WinterOverridableTypeMap>{
    <C extends React.ElementType>(
        props: {
            component: C;
        } & WinterOverrideProps<M, C>
    ): JSX.Element;
    (props: WinterDefaultComponentProps<M>): JSX.Element;
}

export type FundamentProps<M extends WinterOverridableTypeMap> =
    & M['props']
    & WinterCommonProps;

export interface WinterCommonProps extends WinterStyledComponentProps<never>{
    className?: string;
    style?: React.CSSProperties;
}

export type WinterDefaultComponentProps<M extends WinterOverridableTypeMap> =
    & FundamentProps<M>
    & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof FundamentProps<M>>;

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;