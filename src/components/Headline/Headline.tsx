import { FC } from 'react';

import GenerationBalance from '../GenerationBalance/GenerationBalance';
import styles from './Headline.module.scss';
import { IHeadline } from './types';

const Headline:FC<IHeadline> = ({
  title,
  generationBalance,
  description
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {title && (
          <div className={styles.title}>{title}</div>
        )}
        {generationBalance && (
          <div className={styles.balance}>
            <GenerationBalance

            />
          </div>
        )}
      </div>
      {description && (
        <div className={styles.description}>{description}</div>
      )}
    </div>
  );
};

export default Headline;