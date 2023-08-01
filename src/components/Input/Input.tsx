import { FC, useState } from 'react';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';

import styles from './Input.module.scss';
import { IInput } from './types';


const Input:FC<IInput> = (props) => {
  const { error } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${styles.wrapper} ${props?.type === 'password' ? styles.password : ''} ${error ? styles.error : ''}`}>
      <input {...props} type={props?.type !== 'password' ? props?.type : (visible ? 'text' : 'password')}/>
      {
        props?.type === 'password' &&  (
          <button type='button' onClick={() => setVisible(s => !s)} className={styles.password_toggle}>
            {
              visible ? (
                <AiFillEyeInvisible/>
              ) : <AiFillEye/>
            }
          </button>
        )
      }
      {
        (error && typeof error === 'string') && (
          <div className={styles.error_label}>
            {error}
          </div>
        )
      }
    </div>
  );
};

export default Input;