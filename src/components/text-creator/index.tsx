import { useAppSelector } from '@hooks/reduxHooks';
import letterIcon from '@icons/icon-letter-a.png';
import starIcon from '@icons/icon-star.png';
import { useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  createText: () => void
  createIcon: (icon: string) => void
}

const TextCreator = ({ createText, createIcon }: Props) => {
  const { svgCollections } = useAppSelector((state) => state.mainReducer);
  const [showSvgIcons, setShowSvgIcons] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div onClick={createText} className={styles.control}>
          <div className={styles.circle}>
            <img src={letterIcon} alt="letter-icon" />
          </div>
          <span>Текст</span>
        </div>
        {/* <div onClick={() => { setShowSvgIcons((prev) => !prev); }} className={styles.control}>
          <div className={styles.circle}>
            <img src={starIcon} alt="star-icon" />
          </div>
          <span>Иконка</span>
        </div> */}
      </div>
      {showSvgIcons && (
        <div className={styles.svgCollections}>
          {svgCollections.map((icon) => (
            <div onClick={() => {
              createIcon(`data:image/svg+xml;base64,${icon.image}`);
              setShowSvgIcons(false);
            }} key={icon.id}>
              <img src={`data:image/svg+xml;base64,${icon.image}`} alt="icon" />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default TextCreator;