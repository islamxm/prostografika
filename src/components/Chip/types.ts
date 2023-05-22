import { CSSProperties } from "react";

export interface IChip {
    id?: string | number,
    label?: string,
    isActive?: boolean,
    onSelect?: (id?: string | number) => any,
    style?: CSSProperties
}