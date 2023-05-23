import styles from './Header.module.scss';
import {BsChevronLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { main_menuClose, main_menuOpen } from '../../store/slices/mainSlice/mainSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

const Header = ({
    isActive
}: {
    isActive?: boolean
}) => {
    const {mainReducer: {isMenuOpen}} = useAppSelector(s => s)
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    

    const menuToggle = () => {
        
        isMenuOpen ? 
        dispatch(main_menuClose()) :
        dispatch(main_menuOpen())
    }

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
            <button onClick={() => nav(-1)} className={`${styles.back} ${isMenuOpen ? styles.hide : ''}`}>
                <span className={styles.icon}>
                    <BsChevronLeft/>
                </span>
                <span className={styles.label}>
                    Назад
                </span>
            </button>
            <button 
                onClick={menuToggle}
                className={`${styles.burger} ${isMenuOpen && styles.active}`}>
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