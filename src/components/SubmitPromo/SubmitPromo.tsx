import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './SubmitPromo.module.scss';

const SubmitPromo = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.field}>
        <Input
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder='Введите промокод'
        />
      </div>
      <div className={styles.action}>
        <Button
          disabled={!value}
          view='icon'
          variant='aqua'
          icon={<FaTelegramPlane size={28} color={'#fff'}/>}
        />
      </div>
    </div>
  );
};


export default SubmitPromo;