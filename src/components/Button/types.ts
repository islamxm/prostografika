import { HTMLProps, ReactNode } from "react";

export interface buttonType extends HTMLProps<HTMLButtonElement> {
    variant?: buttonVariants,
    view?: buttonView,
    text?: string,
    beforeIcon?: ReactNode,
    afterIcon?: ReactNode,
    icon?: ReactNode,
    fill?: boolean,
    bottomLabel?: string
}

export type buttonVariants = 'violet' | 'aqua' | 'light-violet'
export type buttonView = 'button' | 'icon'