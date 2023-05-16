import styles from './AuthPage.module.scss';
import { FC } from 'react';
import Form from './components/Form/Form';
import Checkbox from '../../components/Checkbox/Checkbox';

const AuthPage:FC = () => {

    return (    
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <Form/>
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
        </div>
    )
}

export default AuthPage;