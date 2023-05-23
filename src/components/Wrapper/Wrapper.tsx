import styles from './Wrapper.module.scss';
import { FC, ReactNode, useEffect, useRef , useState} from 'react';
import Header from '../Header/Header';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLocation } from 'react-router-dom';
import { useScroll } from '@react-hooks-library/core'
import Sidebar from '../Sidebar/Sidebar';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { main_menuClose } from '../../store/slices/mainSlice/mainSlice';
import Div100vh from 'react-div-100vh'

const Wrapper:FC<{children?: ReactNode}> = ({
    children
}) => {
    
    const dispatch = useAppDispatch()
    const {mainReducer: {token, isMenuOpen}} = useAppSelector(s => s)
    const {pathname} = useLocation()
    const boxRef = useRef<HTMLDivElement>(null)
    const location = useLocation()
    const [headerActive, setHeaderActive] = useState<boolean>()
    const [vh, setVh] = useState<number>(1)

    useScroll(boxRef, ({ scrollY }) => {
        scrollY > 0 ? setHeaderActive(true) : setHeaderActive(false) 
    })


    useEffect(() => {
        dispatch(main_menuClose())
    }, [location])
    

    useEffect(() => {
        setVh(window.innerHeight / 100)
    }, [])
    


    return (
       
        <Div100vh ref={boxRef} className={styles.wrapper}>
            {(token && pathname !== '/') && <Header isActive={headerActive && !isMenuOpen}/>}
            <Sidebar/>
            {children}
        </Div100vh>
    )
}

export default Wrapper;

