import styles from './PersonalGenPage.module.scss';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import Headline from '../../components/Headline/Headline';
import {Row, Col} from 'antd';
import Button from '../../components/Button/Button';
import TextArea from '../../components/TextArea/TextArea';


const PersonalGenPage = () => {

    return (
        <>
            <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
                <Headline 
                    title='Персональная
                    генерация'
                    generationBalance={true}
                    />
                    <div className={styles.body}>
                        <Row gutter={[25,25]}>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.source}>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.head}>Опишите свое будущее изображение</div>
                                    <div className={styles.main}>
                                        <TextArea
                                            placeholder='Описание'
                                            height={85}
                                            />
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.head}>Перечислете, что не хотите видеть</div>
                                    <div className={styles.main}>
                                        <TextArea
                                            placeholder='Описание'
                                            height={85}
                                            />
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.head}>Выберите понравившиеся изображения, стили</div>
                                    <div className={styles.list}>
                                        <Row gutter={[10,10]}>
                                            <Col span={8}>
                                                <div className={styles.add}>нет</div>
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.add}>Добавить свое</div>
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.item}></div>
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.item}></div>
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.item}></div>
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.item}></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </motion.div>
            <div className={styles.action}>
                <Button
                    text='Создать'
                    fill
                    />
            </div>
        </>
    )
}

export default PersonalGenPage;