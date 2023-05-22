import styles from './PricingBody.module.scss';
import PricingCard from '../PricingCard/PricingCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import { IPricingCard } from '../PricingCard/types';

const list:IPricingCard[] = [
    {
        id: '1',
        price: 'Пробный',
        descrList: [
            {label: 'Доступно 15 генераций изображений', lineover: false},
            {label: 'Генерация фона по 10 шаблонам', lineover: false},
            {label: 'Создание инфографики', lineover: false},
            {label: 'Доступ к обучающим материалам ', lineover: false},
            {label: 'Сохранение в разрешении 1024*1024', lineover: false},
        ]
    },
    {
        id: '2',
        price: '249',
        descrList: [
            {label: 'Доступно 15 генераций изображений', lineover: false},
            {label: 'Удаление фона', lineover: false},
            {label: 'Генерация фона по 10 шаблонам ', lineover: false},
            {label: 'Создание инфографики', lineover: false},
            {label: 'Доступ к обучающим материалам ', lineover: false},
            {label: 'Сохранение в разрешении 1024*1024', lineover: false},
        ]
    },
    {
        id: '3',
        price: '749',
        descrList: [
            {label: 'Доступно 60 генераций изображений ', lineover: false},
            {label: 'Удаление фона  ', lineover: false},
            {label: 'Генерация фона по 10 шаблонам', lineover: false},
            {label: 'Создание инфографики', lineover: false},
            {label: 'Доступ к обучающим материалам ', lineover: false},
            {label: 'Сохранение в разрешении 1024*1024', lineover: false},
            {label: 'Генерация ЛЮБЫХ фонов', lineover: false},
            {label: 'Возможность работать с сохраненными изображениями', lineover: false},
            {label: '7 дней бесплатного доступа к сервису по настройке рекламы', lineover: false},
            {label: 'Авторские шаблоны фона', lineover: false},
            {label: 'Дизайнерские шаблоны инфографики', lineover: false},
            {label: 'Автообновление шаблонов', lineover: false},
        ]
    },
    {
        id: '4',
        price: '1490',
        descrList: [
            {label: 'Доступно 160 генераций изображений ', lineover: false},
            {label: 'Удаление фона', lineover: false},
            {label: 'Генерация фона по 10 шаблонам ', lineover: false},
            {label: 'Создание инфографики', lineover: false},
            {label: 'Доступ к обучающим материалам ', lineover: false},
            {label: 'Сохранение в разрешении 1024*1024', lineover: false},
            {label: 'Генерация ЛЮБЫХ фонов', lineover: false},
            {label: 'Возможность работать с сохраненными изображениями', lineover: false},
            {label: '7 дней бесплатного доступа к сервису по настройке рекламы', lineover: false},
            {label: 'Авторские шаблоны фона', lineover: false},
            {label: 'Дизайнерские шаблоны инфографики', lineover: false},
            {label: 'Автообновление шаблонов', lineover: false},
        ]
    }
]


const PricingBody = ({
    onSelectPlan,
    active
}: {
    onSelectPlan: (...args: any[]) => any,
    active?: string
}) => {

    return (
        <div className={styles.wrapper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={12}
                initialSlide={1}
                className={styles.slider}
                >
                {
                    list?.map((item, index) => (
                        <SwiperSlide className={styles.slide} key={index}>
                            <PricingCard {...item} name='plan' checked={active === item.id} onSelectPlan={onSelectPlan}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}


export default PricingBody;