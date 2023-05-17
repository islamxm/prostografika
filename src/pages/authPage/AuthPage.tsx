import styles from './AuthPage.module.scss';
import { FC } from 'react';
import Form from './components/Form/Form';
import Checkbox from '../../components/Checkbox/Checkbox';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import { useNavigate } from 'react-router-dom';

const AuthPage:FC = () => {
    const nav = useNavigate()

    const onSubmit = () => {
        nav('/format')
    }

    return (    
        <motion.div 
            {...pageEnterExitAnim}
            className={styles.wrapper}>
            <div className={styles.main}>
                <Form
                    onSubmit={onSubmit}
                    />
            </div>
            <div className={styles.ex}>
                <Checkbox
                    id='policy'
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