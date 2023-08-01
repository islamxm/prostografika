import { FC } from 'react';

import styles from './IconButton.module.scss';
import { IIconButton } from './types';

const IconButton:FC<IIconButton> = (props) => {
  const { icon, label, type } = props;

  return (
    <button {...props} type={type ? type : 'button'} className={styles.wrapper}>
      <div className={styles.icon}>
        {icon}
      </div>
      {
        label && <div className={styles.label}>{label}</div>
      }
    </button>
  );
};

export default IconButton;