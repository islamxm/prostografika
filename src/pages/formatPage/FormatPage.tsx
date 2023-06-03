import styles from './FormatPage.module.scss';
import Button from '../../components/Button/Button';
import { Row, Col } from 'antd';
import {motion} from 'framer-motion';
import pageEnterExitAnim from '../../utils/pageEnterExitAnim';
import { useNavigate } from 'react-router-dom';

const FormatPage = () => {
    const navigate = useNavigate()


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
                    <Col span={24}>
                        <Button
                            fill
                            onClick={() => navigate('/upload_edit')}
                            text='Wildberries'
                            />
                    </Col>
                    <Col span={24}>
                        <Button
                            fill
                            onClick={() => navigate('/upload_edit')}
                            text='Ozon'
                            variant={'aqua'}
                            />
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}


export default FormatPage;