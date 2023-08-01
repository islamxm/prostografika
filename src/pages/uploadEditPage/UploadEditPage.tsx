import Headline from '@components/Headline/Headline';
import pageEnterExitAnim from '@utils/pageEnterExitAnim';
import { motion } from 'framer-motion';
import { FC } from 'react';

import EditField from './components/EditField/EditField';
import styles from './UploadEditPage.module.scss';

const UploadEditPage: FC = () => {

  return (
    <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
      <Headline
        title='Загрузите фото'
        generationBalance={true}
      />
      <EditField />
    </motion.div>
  );
};

export default UploadEditPage;