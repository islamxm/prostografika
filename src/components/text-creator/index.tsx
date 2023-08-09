import letterIcon from '@icons/icon-letter-a.png';
import starIcon from '@icons/icon-star.png';

import styles from './styles.module.scss';

type Props = {
  createText: () => void
}

const TextCreator = ({ createText }: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div onClick={createText} className={styles.control}>
          <div className={styles.circle}>
            <img src={letterIcon} alt="letter-icon" />
          </div>
          <span>Текст</span>
        </div>
        <div className={styles.control}>
          <div className={styles.circle}>
            <img src={starIcon} alt="star-icon" />
          </div>
          <span>Иконка</span>
        </div>
      </div>
    </div>
  );
};

export default TextCreator;