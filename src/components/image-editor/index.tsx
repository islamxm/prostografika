import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageEditor = ({ handleColorChange }: Props) => {
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.style.setProperty('--bgColor', bgColor);
  }, [bgColor]);

  return (
    <div className={styles.container}>
      <input
        id='color-input'
        type="color" onChange={(e) => {
          handleColorChange(e);
          setBgColor(e.target.value);
        }}
        defaultValue={'#ffffff'}
      />
      <label htmlFor="color-input">
        <div ref={ref} className={styles.circle} />
        <span>Цвет</span>
      </label>
    </div>
  );
};

export default ImageEditor;