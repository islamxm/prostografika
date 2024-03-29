import { FC } from 'react';

import styles from './TextArea.module.scss';
import { ITextArea } from './types';


const TextArea:FC<ITextArea> = (props) => {
  const { height, style } = props;

  return (
    <div className={styles.wrapper}>
      <textarea {...props} style={{ ...style, height }} />
    </div>
  );
};

export default TextArea;