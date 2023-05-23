import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import {FC} from 'react'
import {BsChevronRight} from 'react-icons/bs';


const Item:FC<{link?: string, label?: string, redirect?: boolean}> = ({
    link,
    label,
    redirect
}) => {


    if(redirect) {
        return (
            <a href={'/'} target={'_blank'} rel="noreferrer" className={styles.wrapper}>
                <div className={styles.label}>{label}</div>
                <div className={styles.icon}>
                    <BsChevronRight/>
                </div>
            </a>
        )
    } 
    return (
        <Link className={styles.wrapper} to={link ? link : '/'}>
            <div className={styles.label}>{label}</div>
            <div className={styles.icon}>
                <BsChevronRight/>
            </div>
        </Link>
    )
}

export default Item;