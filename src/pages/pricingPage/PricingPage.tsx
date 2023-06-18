import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import styles from './PricingPage.module.scss';
import {motion} from 'framer-motion';
import Headline from '../../components/Headline/Headline';
import PricingBody from './components/PricingBody/PricingBody';
import SubmitPromo from '../../components/SubmitPromo/SubmitPromo';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';


const PricingPage = () => {
    const [selectedPlan, setSelectedPlan] = useState('2')

    useEffect(() => console.log(selectedPlan), [selectedPlan])

    return (
        <>
            <motion.div
                {...pageEnterExitAnim}
                className={styles.wrapper}
                >
                <Headline
                    title='Тарифы'
                    description='У вас закончились бесплатные загрузки. Заберите свой промокод в нашем телеграмм канале. '
                    /> 
                <PricingBody active={selectedPlan} onSelectPlan={setSelectedPlan}/>
                <SubmitPromo/>
                
            </motion.div>
            <div className={styles.action}>
                <Button
                    text='Оплатить'
                    fill
                    disabled={!selectedPlan}
                    />
            </div>
        </>
        
        
    )
}

export default PricingPage;