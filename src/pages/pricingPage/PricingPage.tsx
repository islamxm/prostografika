import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import styles from './PricingPage.module.scss';
import {motion} from 'framer-motion';
import Headline from '../../components/Headline/Headline';

const PricingPage = () => {

    return (
        <motion.div
            {...pageEnterExitAnim}
            className={styles.wrapper}
            >
            <Headline
                title='Тарифы'
                description='У вас закончились бесплатные загрузки. Заберите свой промокод в нашем телеграмм канале. '
                /> 
        </motion.div>
    )
}

export default PricingPage;