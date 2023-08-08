import Circle from '@components/circle';
import { useAppSelector } from '@hooks/reduxHooks';
import cx from 'classnames';
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
  const { selectedTemplate } = useAppSelector(s => s.mainReducer);
  const [circleBgColor, setCircleBgColor] = useState<string>('#fff');

  return (
    <div>
      <div className={styles.colorControls}>
        <div className={styles.control} onClick={() => setType("color")}>
          <input
            id='color-input'
            type="color"
            defaultValue={'#ffffff'}
            onChange={(e) => {
              handleColorChange(e);
              setCircleBgColor(e.target.value);
            }}
          />
          <label htmlFor="color-input">
            <Circle color={circleBgColor} label='Цвет' isSelected={type === 'color'} />
          </label>
        </div>
        <div
          className={cx({ [styles.disabled]: selectedTemplate?.type !== 'color' })}
          onClick={() => {
            if (selectedTemplate?.type === 'color') {
              setType("gradient");
            }
          }}>
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