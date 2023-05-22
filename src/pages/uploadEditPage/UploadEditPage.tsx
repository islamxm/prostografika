import styles from './UploadEditPage.module.scss';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import Headline from '../../components/Headline/Headline';
import {FC} from 'react';
import EditField from './components/EditField/EditField';

const UploadEditPage:FC = () => {

    return (
        <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline 
                title='Загрузите фото'
                generationBalance={true}
                />
                <EditField/>
        </motion.div>
    )
}

export default UploadEditPage;