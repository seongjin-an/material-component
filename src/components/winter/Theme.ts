interface IColor {
    dark: string;
    light: string;
}

type Key<T> = {
    [K in keyof T]?: string;
}

export interface Theme{
    palette: Record<string, any> & IPalette;
}

export interface IPalette {
    primary: Key<IColor>
}

export type PartialTypeObject = { [P in keyof IPalette]?: Partial<IPalette[P]> };

const imsi:PartialTypeObject = {
    primary: {
        dark: "",
        light: ""
    }
}