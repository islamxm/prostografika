import styles from './Checkbox.module.scss';
import { FC } from 'react';
import { ICheckbox } from './types';
import {BsCheckLg} from 'react-icons/bs';

const Checkbox:FC<ICheckbox> = (props) => {

    return (
        <div className={styles.wrapper}>
            <input {...props} type="checkbox" />
            <label className={styles.label} htmlFor={props?.id}>
                <div className={styles.icon}>
                    <div className={styles.el}><BsCheckLg/></div>
                </div>
                <div className={styles.body}>
                {props.body}
                </div>
            </label>
        </div>
    )

}

export default Checkbox;