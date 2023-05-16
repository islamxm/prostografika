import { ReactNode } from "react";

export interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
    body?: ReactNode
}