import cx from 'classnames';

import styles from './styles.module.scss';

type Props = {
  isSelected: boolean
  label?: string
  color: string
}

const Circle = ({ isSelected, color, label }: Props) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.circle, { [styles.selected]: isSelected })}>
        <div className={styles.circleInner} style={{ background: color }} />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Circle;