import styles from './CardsPage.module.scss';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import Headline from '../../components/Headline/Headline';
import Card from '../../components/Card/Card';
import {Row, Col} from 'antd';

const CardsPage = () => {

    return (
        <motion.div {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline
                generationBalance={true}
                title='Мои карточки'
                />
            <div className={styles.body}>
                <Row gutter={[15,15]}>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                    <Col span={12}><Card/></Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default CardsPage;