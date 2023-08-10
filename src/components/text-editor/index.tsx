import Circle from '@components/circle';
import letterIcon from '@icons/icon-letter-a.png';
import radialGrIcon from '@icons/icon-radial-gradient.png';
import { useEffect, useState } from 'react';

import ColorVariants from './components/ColorVariants';
import FontVariants from './components/FontVariants';
import { TextEditorContext } from './components/TextEditorContext';
import styles from './styles.module.scss';

type Props = {
  canvasTextObject: fabric.IText | null
  requestRenderAll: () => void
}

type TextProps = 'color' | 'fontFamily'

const TextEditor = ({ requestRenderAll, canvasTextObject }: Props) => {
  const [selectedTextProp, setSelectedTextProp] = useState<TextProps>('fontFamily');
  const handleCircleClick = (prop: TextProps) => () => setSelectedTextProp(prop);

  useEffect(() => () => setSelectedTextProp('fontFamily'), []);

  if (canvasTextObject === null) {
    return null;
  }

  return (
    <TextEditorContext.Provider value={{ canvasTextObject, requestRenderAll }}>
      <div className={styles.container}>
        <div className={styles.upperPanel}>
          <div onClick={handleCircleClick('fontFamily')}>
            <Circle isSelected={selectedTextProp === 'fontFamily'} color='transparent'>
              <img style={{ width: '100%' }} src={letterIcon} alt='letter-icon' />
            </Circle>
          </div>
          <div onClick={handleCircleClick('color')}>
            <Circle isSelected={selectedTextProp === 'color'} color='transparent' >
              <img style={{ width: '100%' }} src={radialGrIcon} alt="radial-gr-icon" />
            </Circle>
          </div>
        </div>
        <div className={styles.lowerPanel}>
          <div className={styles.row}>
            {selectedTextProp === 'fontFamily' && <FontVariants />}
            {selectedTextProp === 'color' && <ColorVariants />}
          </div>
        </div>
      </div>
    </TextEditorContext.Provider>
  );
};

export default TextEditor;