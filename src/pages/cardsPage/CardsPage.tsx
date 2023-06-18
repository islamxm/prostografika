import styles from './CardsPage.module.scss';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import Headline from '../../components/Headline/Headline';
import Card from '../../components/Card/Card';
import {Row, Col} from 'antd';
import SkCards from '../../skeletons/SkCards/SkCards';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import MainApi from '../../service/MainApi';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const service = new MainApi()

const CardsPage = () => {
    const navigate = useNavigate()
    const {token} = useAppSelector(s => s.mainReducer)
    const [loaded, setLoaded] = useState(false)
    const [list, setList] = useState<any[]>([])
    



    useEffect(() => {
        if(token) {
            setLoaded(false)
            service.getCards(token).then(res => {
                setList(res?.results)
            }).finally(() => {
                setLoaded(true)
            })
        }
    }, [token])


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
                            <Row gutter={[15,15]}>
                                {
                                    list?.map((i, index) => (
                                        <Col span={12}><Card {...i}/></Col>
                                    ))
                                }
                            </Row>
                        ) : <SkCards/>
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
        
    )
}

export default CardsPage;