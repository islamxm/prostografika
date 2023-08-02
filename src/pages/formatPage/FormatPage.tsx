import Button from '@components/Button/Button';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { main_updateMarketId } from '@store/slices/mainSlice/mainSlice';
import pageEnterExitAnim from '@utils/pageEnterExitAnim';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styles from './FormatPage.module.scss';

const FormatPage = () => {
  const dispatch = useAppDispatch();
  const { markets } = useAppSelector(s => s.mainReducer);
  const navigate = useNavigate();

  const onSelectMarket = (id: number | string) => {
    dispatch(main_updateMarketId(id));
    navigate('/upload_edit');
  };

  return (
    <motion.div
      {...pageEnterExitAnim}
      className={styles.wrapper}>
      <div className={styles.body}>
        <Row gutter={[25, 25]}>
          <Col span={24}>
            <div className={styles.title}>
              Для какого маркетплейса создаете карточку?
            </div>
          </Col>
          {
            markets?.map(i => (
              <Col span={24} key={i.id}>
                <Button
                  style={{ backgroundColor: i.color, paddingTop: 8, paddingBottom: 8 }}
                  fill
                  onClick={() => onSelectMarket(i.id)}
                  text={i.title}
                  exText={`${i.size_x}x${i.size_y}px`}
                />
              </Col>
            ))
          }
        </Row>
      </div>
    </motion.div>
  );
};


export default FormatPage;