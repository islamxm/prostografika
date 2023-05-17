import styles from './Header.module.scss';
import {BsChevronLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const nav = useNavigate()

    return (
        <div className={styles.wrapper}>
            <button onClick={() => nav(-1)} className={styles.back}>
                <span className={styles.icon}>
                    <BsChevronLeft/>
                </span>
                <span className={styles.label}>
                    Назад
                </span>
            </button>
            <button className={styles.burger}>
                <div className={styles.in}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    )
}



export default Header;