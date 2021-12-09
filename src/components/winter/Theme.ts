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
