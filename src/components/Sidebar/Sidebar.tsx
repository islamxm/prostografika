import styles from './Sidebar.module.scss';
import {FC} from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import Headline from '../Headline/Headline';
import {Row, Col} from 'antd';
import Item from './components/Item/Item';

const Sidebar:FC = () => {
    const {mainReducer: {isMenuOpen}} = useAppSelector(s => s)

    return (
        <div className={`${styles.wrapper} ${isMenuOpen && styles.active}`}>
            <div className={styles.in}>
                <Headline
                    generationBalance={true}
                    title='Личный кабинет'
                    />
                <div className={styles.body}>
                    <Row gutter={[12,12]}>
                        <Col span={24}>
                            <Item
                                link='/my_cards'
                                label='Мои карточки'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                link='/format'
                                label='Создать новую карточку'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                link='/pricing'
                                label='Выбрать тариф'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                link='/history'
                                label='История генераций'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                redirect
                                label='Изменить пароль'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                redirect
                                label='Получить еще генераций'
                                />
                        </Col> 
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Sidebar