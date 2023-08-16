import Circle from '@components/circle';
import { useAppSelector } from '@hooks/reduxHooks';
import { ColorPicker } from 'antd';
import cx from 'classnames';
import React, { useState } from 'react';

import GradientController from './components/GradientController';
import styles from './styles.module.scss';

type Props = {
  handleColorChange: (color: string) => void
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
          <ColorPicker
            disabledAlpha
            onChange={(color, hex) => {
              handleColorChange(hex);
              setCircleBgColor(hex);
            }}
          >
            {' '}
            <Circle
              color={circleBgColor}
              label='Цвет'
              isSelected={type === 'color'}
            />
          </ColorPicker>
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