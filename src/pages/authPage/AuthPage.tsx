import styles from './AuthPage.module.scss';
import { ChangeEvent, FC, useState } from 'react';
import Form from './components/Form/Form';
import Checkbox from '../../components/Checkbox/Checkbox';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import { useNavigate } from 'react-router-dom';
import MainApi from '../../service/MainApi';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { main_updateToken } from '../../store/slices/mainSlice/mainSlice';

const apiMain = new MainApi()

const AuthPage:FC = () => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const [acceptPolicy, setAcceptPolicy] = useState(false)
    const [loginLoad, setLoginLoad] = useState(false)

    const onSubmit = (body: {password: string, phone: string}) => {
        // nav('/format')

        if(acceptPolicy) {
            setLoginLoad(true)
            apiMain.auth(body).then(res => {
                console.log(res)
                if(res?.auth_token) {
                    dispatch(main_updateToken(res?.auth_token))
                    
                }
            }).finally(() => {
                setLoginLoad(false)
            }) 
        } else {
            alert('Нужно принять политику конфиденциальности')
        }
        
    }

    return (    
        <motion.div 
            {...pageEnterExitAnim}
            className={styles.wrapper}>
            <div className={styles.main}>
                <Form
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
    )
}

export default AuthPage;