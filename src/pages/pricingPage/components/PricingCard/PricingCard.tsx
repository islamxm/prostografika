import styles from './PricingCard.module.scss';
import {FC} from 'react';
import { IPricingCard } from './types';


const PricingCard:FC<IPricingCard> = ({

}) => {

    return (
        <div className={styles.wrapper}>
            <input type="radio"/>
            <label className={styles.in} htmlFor="">
                <div className={styles.head}>
                    <div className={styles.title}>1 скачивания</div>
                    <div className={styles.price}>199₽</div>
                        
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.body}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            У вас закончились бесплатные загрузки. Заберите свой промокод в нашем телеграмм канале. 
                        </li>
                        <li className={styles.item}>
                            У вас закончились бесплатные загрузки. 
                        </li>
                        <li className={styles.item}>
                            У вас закончились бесплатные загрузки. 
                        </li>
                        <li className={styles.item}>
                            У вас закончились бесплатные загрузки. 
                        </li>
                    </ul>
                    
                </div>
            </label>
        </div>
    )
}


export default PricingCard;