import { HTMLProps } from "react";

export interface IIconButton extends HTMLProps<HTMLButtonElement> {
    variant?: iconButtonVariants,
    icon: React.ReactNode,
    label?: string,
    type?: 'button' | 'submit' | 'reset'
    
}

export type iconButtonVariants = 'default' 