import Circle from '@components/circle';
import { useAppSelector } from '@hooks/reduxHooks';
import { fabric } from 'fabric';
import { useState } from 'react';

import styles from './GradientController.module.scss';

type Props = {
  handleGradientChange: (gradient: fabric.Gradient) => void
}

function angle2rect(angle: number, sx: number, sy: number) {
  while (angle < 0) angle += 360; angle %= 360;

  const a = sy, b = a + sx, c = b + sy, p = (sx + sy) * 2, rp = p / 360;
  const pp = Math.round(((angle * rp) + (sy / 2)) % p);

  if (pp <= a) return { x: 0, y: sy - pp };
  if (pp <= b) return { y: 0, x: pp - a };
  if (pp <= c) return { x: sx, y: pp - b };
  return { y: sy, x: sx - (pp - c) };
}

const GradientController = ({ handleGradientChange }: Props) => {
  const { gradients, cardSize } = useAppSelector(s => s.mainReducer);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.container}>
      {gradients.map(({ colors, angle }, index) => {
        const color = colors.reduce((acc, curr) => {
          acc += `,${curr.color} ${curr.offset * 100}%`;
          return acc;
        }, '');
        const gr = `linear-gradient(${angle}deg, ${color.slice(1)})`;
        return (
          <div
            key={index}
            onClick={() => {
              const { x, y } = angle2rect(angle, cardSize.width, cardSize.height);

              const gradient = new fabric.Gradient({
                type: 'linear',
                colorStops: colors,
                gradientUnits: 'pixels',
                coords: {
                  x1: x,
                  y1: y,
                  x2: cardSize.width - x,
                  y2: cardSize.width - y
                }
              });
              setSelectedIndex(index);
              handleGradientChange(gradient);
            }}
          >
            <Circle color={gr} isSelected={index === selectedIndex} />
          </div>
        );
      })}
    </div>
  );
};

export default GradientController;