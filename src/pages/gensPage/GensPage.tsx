import styles from './GensPage.module.scss';
import {motion, useAnimate} from 'framer-motion';
import Headline from '../../components/Headline/Headline';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import {Row, Col} from 'antd';
import GenCard from './compoents/GenCard/GenCard';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';


const GensPage = () => {
    const navigate = useNavigate()


    return (
        <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline 
                title='Генерации'
                generationBalance={true}
                />
                <div className={styles.body}>
                    <div className={styles.list}>
                        <Row gutter={[15,15]}>
                            <Col span={12}><GenCard/></Col>
                            <Col span={12}><GenCard/></Col>
                            <Col span={12}><GenCard/></Col>
                            <Col span={12}><GenCard/></Col>
                        </Row>
                    </div>
                    <div className={styles.action}>
                        <Button
                            fill
                            onClick={() => navigate('/personal_generation')}
                            text='Сгенерировать еще'
                            />
                    </div>
                </div>
        </motion.div>
    )
}


export default GensPage;