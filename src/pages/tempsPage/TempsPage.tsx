import styles from './TempsPage.module.scss';
import {motion} from 'framer-motion';
import Headline from '../../components/Headline/Headline';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import {Row, Col} from 'antd';
import Button from '../../components/Button/Button';
import {FiChevronRight} from 'react-icons/fi';
import TempCard from './components/TempCard/TempCard';
import { useNavigate } from 'react-router-dom';


const TempsPage = () => {
    const navigate = useNavigate()


    return (
        <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
            <Headline 
                title='Выберите шаблон'
                generationBalance={true}
                />
                <div className={styles.body}>
                    <Row gutter={[25,25]}>
                        <Col span={24}>
                            <div className={styles.part}>
                                <div className={styles.head}>Готовые шаблоны</div>
                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className={styles.part}>
                                <div className={styles.head}>Сгенерированные шаблоны</div>
                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                    <div className={styles.item}>
                                        <TempCard/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className={styles.ex}>
                                <div className={styles.text}>
                                Хочешь уникальные карточки, индивидуально по твоему запросу с помощью искусственного интеллекта?
                                </div>
                                <div className={styles.action}>
                                    <Button
                                        text='Попробовать'
                                        fill
                                        onClick={() => navigate('/generations')}
                                        afterIcon={<FiChevronRight/>}
                                        />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
        </motion.div>
    )
}

export default TempsPage;