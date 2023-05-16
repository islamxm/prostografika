import styles from './FormatPage.module.scss';
import Button from '../../components/Button/Button';
import { Row, Col } from 'antd';

const FormatPage = () => {

    return (
        <div className={styles.wrapper}>
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
                            text='Wildberries'
                            />
                    </Col>
                    <Col span={24}>
                        <Button
                            fill
                            text='Ozon'
                            variant={'aqua'}
                            />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FormatPage;