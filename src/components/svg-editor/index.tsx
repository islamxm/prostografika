import Circle from '@components/circle';
import { useAppSelector } from '@hooks/reduxHooks';
import { useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  canvasSvgObject: fabric.Group | null
  requestRenderAll: () => void
}

type Colors = 'red' | 'green' | 'yellow' | 'purple' | 'black' | 'orange' | 'blue'

const SvgEditor = ({ canvasSvgObject, requestRenderAll }: Props) => {
  const { cardSize } = useAppSelector((state) => state.mainReducer);
  const [selected, setSelected] = useState<Colors>('black');

  if (canvasSvgObject === null) {
    return null;
  }

  const handleSelectCircle = (color: Colors) => () => {
    setSelected(color);
    canvasSvgObject.getObjects().forEach((o) => o.set('stroke', color));
    requestRenderAll();
  };

  return (
    <div className={styles.container} style={{ height: (cardSize.height + 105) }} >
      <div className={styles.upperPanel}></div>
      <div className={styles.lowerPanel}>
        <div className={styles.row}>
          <div onClick={handleSelectCircle('red')}>
            <Circle isSelected={selected === 'red'} color='red' />
          </div>
          <div onClick={handleSelectCircle('green')}>
            <Circle isSelected={selected === 'green'} color='green' />
          </div>
          <div onClick={handleSelectCircle('yellow')}>
            <Circle isSelected={selected === 'yellow'} color='yellow' />
          </div>
          <div onClick={handleSelectCircle('purple')}>
            <Circle isSelected={selected === 'purple'} color='purple' />
          </div>
          <div onClick={handleSelectCircle('black')}>
            <Circle isSelected={selected === 'black'} color='black' />
          </div>
          <div onClick={handleSelectCircle('orange')}>
            <Circle isSelected={selected === 'orange'} color='orange' />
          </div>
          <div onClick={handleSelectCircle('blue')}>
            <Circle isSelected={selected === 'blue'} color='blue' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgEditor;