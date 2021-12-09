export type WinterClassNameMap<K extends string = string> = Record<K, string>

interface WinterStyledComponentProps<K extends string = string> {
    classes?: Partial<WinterClassNameMap<K>>;
}