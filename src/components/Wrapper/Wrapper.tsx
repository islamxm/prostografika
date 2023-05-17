import styles from './Wrapper.module.scss';
import { FC, ReactNode, useEffect } from 'react';
import Header from '../Header/Header';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLocation } from 'react-router-dom';



const Wrapper:FC<{children?: ReactNode}> = ({
    children
}) => {
    const {mainReducer: {token}} = useAppSelector(s => s)
    const {pathname} = useLocation()

    
    

    return (
       
        <div className={styles.wrapper}>
            {(token && pathname !== '/') && <Header/>}
            {children}
        </div>
    )
}

export default Wrapper;

