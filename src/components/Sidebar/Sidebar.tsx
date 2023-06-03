import styles from './Sidebar.module.scss';
import {FC} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import Headline from '../Headline/Headline';
import {Row, Col} from 'antd';
import Item from './components/Item/Item';
import { Cookies } from 'typescript-cookie';
import { main_deleteToken, main_updateLoading } from '../../store/slices/mainSlice/mainSlice';
import { useNavigate } from 'react-router-dom';
const Sidebar:FC = () => {
    const {isMenuOpen} = useAppSelector(s => s.mainReducer)
    const dispatch = useAppDispatch()
    const nav = useNavigate()

    const onLogout = () => {
        dispatch(main_updateLoading(true))
        dispatch(main_deleteToken())

        Cookies.remove('prostografika-token')
        nav('/auth')
        dispatch(main_updateLoading(false))
    }   

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
                                itemType={1}
                                link='/my_cards'
                                label='Мои карточки'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                itemType={1}
                                link='/format'
                                label='Создать новую карточку'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                itemType={1}
                                link='/pricing'
                                label='Выбрать тариф'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                itemType={1}
                                link='/history'
                                label='История генераций'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                itemType={2}
                                label='Изменить пароль'
                                />
                        </Col>
                        <Col span={24}>
                            <Item
                                itemType={2}
                                label='Получить еще генераций'
                                />
                        </Col> 
                        <Col span={24}>
                            <Item
                                label='Выход'
                                onClick={onLogout}
                                />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Sidebar