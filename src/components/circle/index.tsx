import cx from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type Props = {
  isSelected: boolean
  label?: string
  color: string
}

const Circle: FC<PropsWithChildren<Props>> = ({ isSelected, color, label, children }) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.circle, { [styles.selected]: isSelected })}>
        <div className={styles.circleInner} style={{ background: color }} >
          {children}
        </div>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Circle;