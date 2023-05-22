import styles from './PricingCard.module.scss';
import {FC} from 'react';
import { IPricingCard } from './types';
import {BsCheckLg} from 'react-icons/bs';

const PricingCard:FC<IPricingCard> = (props) => {
    const {price,
        descrList,
        onSelectPlan,
        id} = props


    return (
        <div className={styles.wrapper}>
            <input {...props}  onChange={(e) => {
                onSelectPlan && onSelectPlan(id)
            }} type="radio"/>
            <label className={styles.in} htmlFor={id}>
                <div className={styles.head}>
                    <div className={styles.title}>1 скачивания</div>
                    <div className={styles.price}>{price}₽</div>
                        
                    <div className={styles.icon}>
                        <div className={styles.el}><BsCheckLg/></div>
                    </div>
                </div>
                <div className={styles.body}>
                    <ul className={styles.list}>
                        {
                            descrList?.map((i, index) => (
                                <li className={styles.item}>
                                    <span>{index + 1}</span>
                                    {i.label}
                                </li>
                            ))  
                        }
                    </ul>
                    
                </div>
            </label>
        </div>
    )
}


export default PricingCard;