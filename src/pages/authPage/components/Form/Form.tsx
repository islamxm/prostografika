import styles from './Form.module.scss';
import Input from '../../../../components/Input/Input';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';
import { useState, FC, ChangeEvent } from 'react';
import MainApi from '../../../../service/MainApi';

const apiMain = new MainApi()

const Form:FC<{
    onSubmit: (...args: any) => any,
    loginLoad: boolean,
}> = ({
    onSubmit
}) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


   


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Вход
            </div>
            <form className={styles.form}>
                <div className={styles.fields}>
                    <Row gutter={[12,12]}>
                        <Col span={24}>
                            <Input
                                placeholder='Номер телефона'
                                value={phone}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                placeholder='Пароль'
                                type='password'
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                        </Col>
                    </Row>
                </div>
                <div className={styles.action}>
                    <Button
                        onClick={() => onSubmit({password, phone})}
                        type='button'
                        text='Вход'
                        disabled={!(password && phone)}
                        fill
                        />
                </div>
                <div className={styles.ex}>
                    <Row gutter={[8,8]}>
                        <Col span={24}>
                            <a href="#">Забыл пароль?</a>
                        </Col>
                        <Col span={24}>
                            <span>Нет аккаунта? <a href="#">Регистрация</a></span>
                        </Col>
                    </Row>
                </div>
            </form>
        </div>
    )
}

export default Form;