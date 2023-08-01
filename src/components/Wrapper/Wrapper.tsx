import { useScroll } from '@react-hooks-library/core';
import { FC, ReactNode, useEffect, useRef , useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/reduxHooks';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { main_menuClose } from '../../store/slices/mainSlice/mainSlice';
import { main_updateLoading } from '../../store/slices/mainSlice/mainSlice';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Wrapper.module.scss';


const Wrapper:FC<{children?: ReactNode}> = ({
  children
}) => {

  const dispatch = useAppDispatch();
  const { mainReducer: { token, isMenuOpen, isLoading } } = useAppSelector(s => s);
  const { pathname } = useLocation();
  const boxRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [headerActive, setHeaderActive] = useState<boolean>();


  useScroll(boxRef, ({ scrollY }) => {
    scrollY > 0 ? setHeaderActive(true) : setHeaderActive(false);
  });


  useEffect(() => {
    dispatch(main_menuClose());
  }, [location]);






  return (

    <Div100vh ref={boxRef} className={styles.wrapper}>

      {isLoading && <Loading/>}

      {(token && pathname !== '/') && <Header isActive={headerActive && !isMenuOpen}/>}

      <Sidebar/>

      {children}

    </Div100vh>
  );
};

export default Wrapper;

