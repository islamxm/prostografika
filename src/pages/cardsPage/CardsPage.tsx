import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import Headline from '@components/Headline/Headline';
import { useAppSelector } from '@hooks/reduxHooks';
import MainApi from '@service/MainApi';
import pageEnterExitAnim from '@utils/pageEnterExitAnim';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SkCards from '../../skeletons/SkCards/SkCards';
import styles from './CardsPage.module.scss';

const service = new MainApi();

const CardsPage = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector(s => s.mainReducer);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState<any[]>([]);


  const getCards = () => {
    if (token) {

      service.getCards(token).then(res => {
        setList(res?.results);
      });
    }
  };


  useEffect(() => {
    if (token) {
      setLoaded(false);
      service.getCards(token).then(res => {
        setList(res?.results);
      }).finally(() => {
        setLoaded(true);
      });
    }
  }, [token]);


  return (
    <>
      <motion.div {...pageEnterExitAnim} className={styles.wrapper}>
        <Headline
          generationBalance={true}
          title='Мои карточки'
        />
        <div className={styles.body}>
          {
            loaded ? (
              <Row gutter={[15, 15]}>
                {
                  list?.map((i, index) => (
                    <Col key={index} span={12}><Card {...i} onUpdate={getCards} /></Col>
                  ))
                }
              </Row>
            ) : <SkCards />
          }

        </div>
      </motion.div>
      <div className={styles.action}>
        <Button
          text='Создать новую'
          fill
          onClick={() => navigate('/format')}
        />
      </div>
    </>

  );
};

export default CardsPage;