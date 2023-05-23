import styles from './Wrapper.module.scss';
import { FC, ReactNode, useEffect, useRef , useState} from 'react';
import Header from '../Header/Header';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLocation } from 'react-router-dom';
import { useScroll } from '@react-hooks-library/core'
import Sidebar from '../Sidebar/Sidebar';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { main_menuClose } from '../../store/slices/mainSlice/mainSlice';
const Wrapper:FC<{children?: ReactNode}> = ({
    children
}) => {
    
    const dispatch = useAppDispatch()
    const {mainReducer: {token, isMenuOpen}} = useAppSelector(s => s)
    const {pathname} = useLocation()
    const boxRef = useRef<HTMLDivElement>(null)
    const location = useLocation()
    const [headerActive, setHeaderActive] = useState<boolean>()

    useScroll(boxRef, ({ scrollY }) => {
        scrollY > 0 ? setHeaderActive(true) : setHeaderActive(false) 
    })


    useEffect(() => {
        dispatch(main_menuClose())
    }, [location])
    
    

    return (
       
        <div ref={boxRef} className={styles.wrapper}>
            {(token && pathname !== '/') && <Header isActive={headerActive && !isMenuOpen}/>}
            <Sidebar/>
            {children}
        </div>
    )
}

export default Wrapper;

