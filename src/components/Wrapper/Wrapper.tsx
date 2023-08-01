import Header from '@components/Header/Header';
import Loading from '@components/Loading/Loading';
import Sidebar from '@components/Sidebar/Sidebar';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { useScroll } from '@react-hooks-library/core';
import { main_menuClose } from '@store/slices/mainSlice/mainSlice';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useLocation } from 'react-router-dom';

import styles from './Wrapper.module.scss';


const Wrapper: FC<{ children?: ReactNode }> = ({
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

      {isLoading && <Loading />}

      {(token && pathname !== '/') && <Header isActive={headerActive && !isMenuOpen} />}

      <Sidebar />

      {children}

    </Div100vh>
  );
};

export default Wrapper;

