import Circle from "@components/circle";
import { useState } from "react";

import styles from './style-variants.module.scss';
import { useTextEditorContext } from "./TextEditorContext";

type Variants = 'red' | 'green' | 'yellow' | 'purple' | 'black' | 'orange' | 'blue'

const ColorVariants = () => {
  const { canvasTextObject, requestRenderAll } = useTextEditorContext();
  const [selected, setSelected] = useState<Variants>('black');

  const handleSelectCircle = (color: Variants) => () => {
    setSelected(color);
    canvasTextObject.set('fill', color);
    requestRenderAll();
  };

  return (
    <div className={styles.container}>
      <div onClick={handleSelectCircle('red')}>
        <Circle isSelected={selected === 'red'} color={'red'} />
      </div>
      <div onClick={handleSelectCircle('green')}>
        <Circle isSelected={selected === 'green'} color={'green'} />
      </div>
      <div onClick={handleSelectCircle('yellow')}>
        <Circle isSelected={selected === 'yellow'} color={'yellow'} />
      </div>
      <div onClick={handleSelectCircle('purple')}>
        <Circle isSelected={selected === 'purple'} color={'purple'} />
      </div>
      <div onClick={handleSelectCircle('black')}>
        <Circle isSelected={selected === 'black'} color={'black'} />
      </div>
      <div onClick={handleSelectCircle('orange')}>
        <Circle isSelected={selected === 'orange'} color={'orange'} />
      </div>
      <div onClick={handleSelectCircle('blue')}>
        <Circle isSelected={selected === 'blue'} color={'blue'} />
      </div>
    </div >
  );
};

export default ColorVariants;