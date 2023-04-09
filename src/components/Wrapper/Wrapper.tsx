import styles from './Wrapper.module.scss';
import { FC, ReactNode } from 'react';


const Wrapper:FC<{children?: ReactNode}> = ({
    children
}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper;

