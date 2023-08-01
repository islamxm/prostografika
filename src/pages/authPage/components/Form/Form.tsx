import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import Input from '@components/Input/Input';
import MainApi from '@service/MainApi';
import { Col, Row } from 'antd';
import { ChangeEvent, FC, useState } from 'react';

import styles from './Form.module.scss';

interface IProps {
  onSubmit: (...args: any) => any,
  loginLoad: boolean,
  saveMe?: boolean,
  setSaveMe: (...args: any[]) => any
  error?: boolean
}

const apiMain = new MainApi();

const Form: FC<IProps> = ({
  onSubmit,
  error,
  loginLoad,
  saveMe,
  setSaveMe
}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Вход
      </div>
      <form className={styles.form}>
        <div className={styles.fields}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Input
                error={error}
                placeholder='Номер телефона'
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Input
                error={error}
                placeholder='Пароль'
                type='password'
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Checkbox
                checked={saveMe}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSaveMe(e.target.checked)}
                id='saveme'
                body={'Запомнить меня'}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.action}>
          <Button
            onClick={() => onSubmit({ password, phone })}
            type='button'
            text='Вход'
            load={loginLoad}
            disabled={!(password && phone)}
            fill
          />
        </div>
        <div className={styles.ex}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <a href="#">Забыл пароль?</a>
            </Col>
            <Col span={24}>
              <span>Нет аккаунта? <a href="https://t.me/akmalovichdevbot">Регистрация</a></span>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default Form;