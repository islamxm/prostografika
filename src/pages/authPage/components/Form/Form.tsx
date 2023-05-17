import styles from './Form.module.scss';
import Input from '../../../../components/Input/Input';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';


const Form = ({
    onSubmit
}: {
    onSubmit: (...args: any) => any
}) => {

    

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
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                placeholder='Пароль'
                                type='password'
                                />
                        </Col>
                    </Row>
                </div>
                <div className={styles.action}>
                    <Button
                        onClick={onSubmit}
                        type='button'
                        text='Вход'
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