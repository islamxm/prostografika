import { TTemplate } from '@store/initState';

import styles from './TempCard.module.scss';

const TempCard = (props: TTemplate) => {

  return (
    <div className={styles.wrapper}>
      {(props.type === 'image' || props.type === 'generated')
        ? <img src={`data:image/png;base64,${props.image}`} />
        : <div className={styles.selectColor}>Выбрать цвет</div>}
    </div>
  );
};


export default TempCard;