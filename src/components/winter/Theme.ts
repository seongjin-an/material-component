interface IColor {
    dark: string;
    light: string;
}

type Key<T> = {
    [K in keyof T]?: string;
}

export interface Theme{
    // palette: Record<string, any>;
    palette: {[K in keyof IPalette]: IPalette[K]};
}
export interface IPalette{
    // [K: string]: object
    common: ICommonColors;
    primary: IColors;
    secondary: IColors;
    success: IColors;
    error: IColors;
    warning: IColors;
    info: IColors;
}
export type PickedPalette = {
    [K in keyof IPalette]?: IPalette[K]
}
export interface ICommonColors{
    black: string;
    white: string;
}
export type TCommonColors = {
    [K in keyof ICommonColors]?: ICommonColors[K]
}
export interface IColors{
    light: string;
    main: string;
    dark: string;
}
export type TPickedColors = {
    [K in keyof IColors]?: IColors[K]
}

// const iKind: IPalette = {
//     common: {
//
//     },
//     primary: {
//
//     },
//     secondary: {
//
//     },
//     success: {
//
//     },
//     error: {
//
//     },
//     warning: {
//
//     },
//     info: {
//
//     }
// }
// export interface IPalette {
//     primary: Key<IColor>
// }

export type PartialTypeObject = { [P in keyof IPalette]?: Partial<IPalette[P]> };

const imsi:PartialTypeObject = {
    primary: {
        dark: "",
        light: ""

    }
}