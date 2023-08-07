import Circle from '@components/circle';
import React, { useState } from 'react';

import GradientController from './components/GradientController';
import styles from './styles.module.scss';

type Props = {
  handleBrightnessChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleGradientChange: (gradient: fabric.Gradient) => void
}

const ColorEditor = ({ handleColorChange, handleGradientChange }: Props) => {
  const [type, setType] = useState<"color" | "gradient">("color");

  return (
    <div>
      <div className={styles.colorControls}>
        <div className={styles.control} onClick={() => setType("color")}>
          <input id='color-input' type="color" onChange={handleColorChange} defaultValue={'#ffffff'} />
          <label htmlFor="color-input">
            <Circle color='red' label='Цвет' isSelected={type === 'color'} />
          </label>
        </div>
        <div onClick={() => setType("gradient")}>
          <Circle color='linear-gradient(139deg, #00D1FF 0%, #AD00FF 100%)' label='Градиент' isSelected={type === 'gradient'} />
        </div>
      </div>
      {type === 'gradient' && (
        <GradientController handleGradientChange={handleGradientChange} />
      )}
    </div>
  );
};

export default ColorEditor;