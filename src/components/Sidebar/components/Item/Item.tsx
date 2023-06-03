import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import {FC} from 'react'
import {BsChevronRight} from 'react-icons/bs';


type itemTypes = 1 | 2 | 3 //1=Next link, 2=tag a
const Item:FC<{link?: string, label?: string, itemType?: number, onClick?: (...args: any) => any}> = ({
    link,
    label,
    itemType,
    onClick
}) => {


    if(itemType === 2) {
        return (
            <a href={'/'} target={'_blank'} rel="noreferrer" className={styles.wrapper}>
                <div className={styles.label}>{label}</div>
                <div className={styles.icon}>
                    <BsChevronRight/>
                </div>
            </a>
        )
    } 
    if(itemType === 1) {
        return (
            <Link className={styles.wrapper} to={link ? link : '/'}>
                <div className={styles.label}>{label}</div>
                <div className={styles.icon}>
                    <BsChevronRight/>
                </div>
            </Link>
        )
    }

    return (
        <div className={styles.wrapper} onClick={() => onClick && onClick()}>
            <div className={styles.label}>{label}</div>
            <div className={styles.icon}>
                <BsChevronRight/>
            </div>
        </div>
    )
    
}

export default Item;