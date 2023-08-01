import { Col,Row } from 'antd';

import styles from './SkCards.module.scss';


const SkCards = () => {

  return (
    <div className={styles.wrapper}>
      <Row gutter={[12,12]}>
        <Col span={12}><div className={styles.item}></div></Col>
        <Col span={12}><div className={styles.item}></div></Col>
        <Col span={12}><div className={styles.item}></div></Col>
        <Col span={12}><div className={styles.item}></div></Col>
        <Col span={12}><div className={styles.item}></div></Col>
        <Col span={12}><div className={styles.item}></div></Col>
      </Row>
    </div>
  );
};

export default SkCards;