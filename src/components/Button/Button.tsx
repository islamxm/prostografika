import styles from './Button.module.scss';
import {FC} from 'react';
import { buttonType, buttonVariants, buttonView } from './types';

const Button:FC<buttonType> = (props) => {

    const {
        variant = 'violet', 
        view = 'button', 
        text,
        afterIcon,
        beforeIcon,
        icon,
        fill
    } = props

    const switchVariant = (variant: buttonVariants) => {
        switch(variant) {
            case 'violet':
                return styles.var_violet
            case 'aqua':
                return styles.var_aqua
            case 'light-violet':
                return styles.var_light_violet
        }
    }

    const switchView = (view: buttonView) => {
        switch(view) {
            case 'button':
                return styles.button_def
            case 'icon':
                return styles.button_icon
            default:
                return styles.button_def
        }
    }


    return (
        <button
            {...props}
            type='button'
            className={`${styles.wrapper} ${switchVariant(variant)} ${switchView(view)} ${fill ? styles.fill : ''}`}
            >
            {
                icon ? (
                    <div className={styles.icon}>{icon}</div>
                ) : null
            }
            {
                beforeIcon ? (
                    <div className={styles.before}>
                        {beforeIcon}
                    </div>
                ) : null
            }
            {
                text ? (
                    <div className={styles.text}>
                        {text}
                    </div>
                ) : null
            }
            {
                afterIcon ? (
                    <div className={styles.after}>
                        {afterIcon}
                    </div>
                ) : null
            }
        </button>
    )
}

export default Button;
