import styles from './CardsPage.module.scss';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import Headline from '../../components/Headline/Headline';
import Card from '../../components/Card/Card';
import {Row, Col} from 'antd';
import SkCards from '../../skeletons/SkCards/SkCards';
import { useState, useEffect } from 'react';


const CardsPage = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let tm:any;

        tm = setTimeout(() => {
            setLoaded(true)
        }, 3000)

        return () => {
            if(tm) {
                clearTimeout(tm)
            }
        }
    })


    return (
        <motion.div {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline
                generationBalance={true}
                title='Мои карточки'
                />
            <div className={styles.body}>
                {
                    loaded ? (
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
                    ) : <SkCards/>
                }
                
            </div>
        </motion.div>
    )
}

export default CardsPage;