import { motion } from 'framer-motion';
import { ChangeEvent, FC, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'typescript-cookie';

import Checkbox from '../../components/Checkbox/Checkbox';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import MainApi from '../../service/MainApi';
import { main_updateToken } from '../../store/slices/mainSlice/mainSlice';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import styles from './AuthPage.module.scss';
import Form from './components/Form/Form';

const apiMain = new MainApi();

const AuthPage:FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(s => s.mainReducer);
  const nav = useNavigate();
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [loginLoad, setLoginLoad] = useState(false);
  const [error, setError] = useState(false);
  const [saveMe, setSaveMe] = useState(false);


  useEffect(() => {
    token && nav('/my_cards');
  }, [token]);



  const onSubmit = (body: {password: string, phone: string}) => {
    if(acceptPolicy) {
      setLoginLoad(true);
      apiMain.auth(body).then(res => {
        if(res?.auth_token) {
          dispatch(main_updateToken(res?.auth_token));
          if(saveMe) {
            Cookies.set('prostografika-token', res?.auth_token);
          }
          nav('/format');
        } else {
          alert('Произошла ошибка');
          setError(true);
        }
      }).finally(() => {
        setLoginLoad(false);
      });
    } else {
      alert('Нужно принять политику конфиденциальности');
    }
  };

  if(token) return null;
  return (
    <motion.div
      {...pageEnterExitAnim}
      className={styles.wrapper}>
      <div className={styles.main}>
        <Form
          saveMe={saveMe}
          setSaveMe={setSaveMe}
          error={error}
          loginLoad={loginLoad}
          onSubmit={onSubmit}
        />
      </div>
      <div className={styles.ex}>
        <Checkbox
          id='policy'
          checked={acceptPolicy}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAcceptPolicy(e.target.checked)}
          body={
            <>
                            Я согласен с <a href="#">Условиями обслуживания</a>
                            и <a href="#">Политикой конфиденциальности</a>
            </>
          }
        />
      </div>
    </motion.div>
  );
};

// const text =
// {
//     color: '#fff',
//     title: 'Ozon',
//     size: {
//         x: 900,
//         y: 1200
//     },
//     id: 1
// }

export default AuthPage;