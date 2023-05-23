import styles from './SkCards.module.scss';
import { Row, Col } from 'antd';


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
    )
}

export default SkCards;