import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import Headline from '../../components/Headline/Headline';
import SubmitPromo from '../../components/SubmitPromo/SubmitPromo';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import PricingBody from './components/PricingBody/PricingBody';
import styles from './PricingPage.module.scss';


const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('2');

  useEffect(() => console.log(selectedPlan), [selectedPlan]);

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


  );
};

export default PricingPage;