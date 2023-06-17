import styles from './TempsPage.module.scss';
import {motion} from 'framer-motion';
import Headline from '../../components/Headline/Headline';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';



const TempsPage = () => {

    return (
        <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline 
                title='Выберите шаблон'
                generationBalance={true}
                />
        </motion.div>
    )
}

export default TempsPage;