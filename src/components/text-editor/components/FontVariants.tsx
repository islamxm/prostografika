import Circle from "@components/circle";
import { useState } from "react";

import styles from './style-variants.module.scss';
import { useTextEditorContext } from "./TextEditorContext";

type Variants = 1 | 2 | 3 | 4
const FontVariants = () => {
  const { canvasTextObject, requestRenderAll } = useTextEditorContext();
  const [selected, setSelected] = useState<Variants>(1);

  const handleSelectCircle = (s: Variants, fontFamily: string) => () => {
    setSelected(s);
    canvasTextObject.set('fontFamily', fontFamily);
    requestRenderAll();
  };

  return (
    <div className={styles.container}>
      <div onClick={handleSelectCircle(1, 'Times New Roman')}>
        <Circle isSelected={selected === 1} color='rgba(0, 0, 0, 0.50)'>
          A1
        </Circle>
      </div>
      <div onClick={handleSelectCircle(2, 'Courier New')}>
        <Circle isSelected={selected === 2} color='rgba(0, 0, 0, 0.50)'>
          A2
        </Circle>
      </div>
      <div onClick={handleSelectCircle(3, 'Open Sans')}>
        <Circle isSelected={selected === 3} color='rgba(0, 0, 0, 0.50)'>
          A3
        </Circle>
      </div>
      <div onClick={handleSelectCircle(4, 'Arial')}>
        <Circle isSelected={selected === 4} color='rgba(0, 0, 0, 0.50)'>
          A4
        </Circle>
      </div>
    </div>
  );
};

export default FontVariants;