import { useAppSelector } from '@hooks/reduxHooks';
import MainApi from '@service/MainApi';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PricingCard from '../PricingCard/PricingCard';
import { IPricingCard } from '../PricingCard/types';
import styles from './PricingBody.module.scss';
// const list:IPricingCard[] = [
//     {
//         id: '1',
//         price: 'Пробный',
//         descrList: [
//             {label: 'Доступно 15 генераций изображений', lineover: false},
//             {label: 'Генерация фона по 10 шаблонам', lineover: false},
//             {label: 'Создание инфографики', lineover: false},
//             {label: 'Доступ к обучающим материалам ', lineover: false},
//             {label: 'Сохранение в разрешении 1024*1024', lineover: false},
//         ]
//     },
//     {
//         id: '2',
//         price: '249',
//         descrList: [
//             {label: 'Доступно 15 генераций изображений', lineover: false},
//             {label: 'Удаление фона', lineover: false},
//             {label: 'Генерация фона по 10 шаблонам ', lineover: false},
//             {label: 'Создание инфографики', lineover: false},
//             {label: 'Доступ к обучающим материалам ', lineover: false},
//             {label: 'Сохранение в разрешении 1024*1024', lineover: false},
//         ]
//     },
//     {
//         id: '3',
//         price: '749',
//         descrList: [
//             {label: 'Доступно 60 генераций изображений ', lineover: false},
//             {label: 'Удаление фона  ', lineover: false},
//             {label: 'Генерация фона по 10 шаблонам', lineover: false},
//             {label: 'Создание инфографики', lineover: false},
//             {label: 'Доступ к обучающим материалам ', lineover: false},
//             {label: 'Сохранение в разрешении 1024*1024', lineover: false},
//             {label: 'Генерация ЛЮБЫХ фонов', lineover: false},
//             {label: 'Возможность работать с сохраненными изображениями', lineover: false},
//             {label: '7 дней бесплатного доступа к сервису по настройке рекламы', lineover: false},
//             {label: 'Авторские шаблоны фона', lineover: false},
//             {label: 'Дизайнерские шаблоны инфографики', lineover: false},
//             {label: 'Автообновление шаблонов', lineover: false},
//         ]
//     },
//     {
//         id: '4',
//         price: '1490',
//         descrList: [
//             {label: 'Доступно 160 генераций изображений ', lineover: false},
//             {label: 'Удаление фона', lineover: false},
//             {label: 'Генерация фона по 10 шаблонам ', lineover: false},
//             {label: 'Создание инфографики', lineover: false},
//             {label: 'Доступ к обучающим материалам ', lineover: false},
//             {label: 'Сохранение в разрешении 1024*1024', lineover: false},
//             {label: 'Генерация ЛЮБЫХ фонов', lineover: false},
//             {label: 'Возможность работать с сохраненными изображениями', lineover: false},
//             {label: '7 дней бесплатного доступа к сервису по настройке рекламы', lineover: false},
//             {label: 'Авторские шаблоны фона', lineover: false},
//             {label: 'Дизайнерские шаблоны инфографики', lineover: false},
//             {label: 'Автообновление шаблонов', lineover: false},
//         ]
//     }
// ]
const service = new MainApi();

const PricingBody = ({
  onSelectPlan,
  active
}: {
  onSelectPlan: (...args: any[]) => any,
  active?: string
}) => {
  const { token } = useAppSelector(s => s.mainReducer);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (token) {
      service.getPlans(token).then(res => {
        setList(res?.results);
        console.log(Object.entries(res?.results[0])?.map(i => i[1]));
      });
    }
  }, [token]);




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
              <PricingCard {...item} planLabel={item?.tariff_label} name='plan' checked={active === item.id} onSelectPlan={onSelectPlan} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};


export default PricingBody;