import styles from './Panel.module.scss';
import {FC, ReactNode} from 'react';

interface IPanel {
    radius?: number,
    children?: ReactNode
} 


const Panel:FC<IPanel> = ({
    children,
    radius = 20
}) => {

    return (
        <div style={{borderRadius: radius}} className={styles.panel}>
            {children}
        </div>
    )
}

export default Panel;