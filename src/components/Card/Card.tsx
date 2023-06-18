import styles from './Card.module.scss';
import {motion} from 'framer-motion';

const Card = (props: any) => {



    return (
        <div
            className={styles.wrapper}>
            <div className={styles.action}>
                <div className={styles.item}>
                    
                </div>
            </div>
            <div className={styles.body}>
                <img src={props?.svg} alt="" />
            </div>
        </div>
    )
}


export default Card;