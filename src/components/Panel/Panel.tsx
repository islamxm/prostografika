import { FC, ReactNode } from 'react';

import styles from './Panel.module.scss';

interface IPanel {
    radius?: number,
    children?: ReactNode
}


const Panel:FC<IPanel> = ({
  children,
  radius = 20
}) => {

  return (
    <div style={{ borderRadius: radius }} className={styles.panel}>
      {children}
    </div>
  );
};

export default Panel;