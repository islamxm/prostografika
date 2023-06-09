import styles from './FormatPage.module.scss';
import Button from '../../components/Button/Button';
import { Row, Col } from 'antd';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import MainApi from '../../service/MainApi';
import {useState, useEffect} from 'react';
import { main_updateMarketId, main_updateLoading } from '../../store/slices/mainSlice/mainSlice';

const service = new MainApi()

const FormatPage = () => {
    const dispatch = useAppDispatch()
    const {token} = useAppSelector(s => s.mainReducer)
    const navigate = useNavigate()
    const [list, setList] = useState<any[]>([])


    useEffect(() => {
        if(token) {
            dispatch(main_updateLoading(true))
            service.getMarkets(token).then(res => {
                console.log(res)
                setList(res?.results)
            }).finally(() => dispatch(main_updateLoading(false)))
        }
    }, [token])


    const onSelectMarket = (id: number | string) => {
        dispatch(main_updateMarketId(id))
        navigate('/upload_edit')
    }


    return (
        <motion.div 
            {...pageEnterExitAnim}
            className={styles.wrapper}>
            <div className={styles.body}>
                <Row gutter={[25,25]}>
                    <Col span={24}>
                        <div className={styles.title}>
                        Для какого маркетплейса создаете карточку?
                        </div>
                    </Col>
                    {
                        list?.map(i => (
                            <Col span={24} key={i.id}>
                                <Button
                                    style={{backgroundColor: i.color, paddingTop: 8, paddingBottom: 8}}
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
    )
}


export default FormatPage;