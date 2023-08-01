import { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import styles from './PricingCard.module.scss';
import { IPricingCard } from './types';

const PricingCard:FC<IPricingCard> = (props) => {
  const {
    price,
    onSelectPlan,
    id,
    planLabel,

    access_to_educational_materials,
    authors_background_templates,
    creating_infographics,
    delete_background,
    design_infographic_templates,
    generation,
    generation_of_any_backgrounds,
    generation_templates,
    save_in_resolution,
    seven_days_of_access_to_advertising,
    template_auto_update,
    working_with_saved_images
  } = props;


  return (
    <div className={styles.wrapper}>
      <input {...props}  onChange={(e) => {
        onSelectPlan && onSelectPlan(id);
      }} type="radio" />
      <label className={styles.in} htmlFor={id}>
        <div className={styles.head}>
          <div className={styles.title}>1 скачивания</div>
          <div className={styles.price}>
            {
              price !== 0 ? (
                `${price}₽`
              ) : `${planLabel}`
            }
          </div>

          <div className={styles.icon}>
            <div className={styles.el}><BsCheckLg /></div>
          </div>
        </div>
        <div className={styles.body}>
          <ul className={styles.list}>
            {/* {
                            descrList?.map((i, index) => (
                                <li className={styles.item}>
                                    <span>{index + 1}</span>
                                    {i.label}
                                </li>
                            ))
                        } */}
            <li className={styles.item}>
              <span>1</span>
                            Доступно {generation} генераций изображений
            </li>
            <li className={styles.item}>
              <span>2</span>
                            Генерация фона по {generation_templates} шаблонам
            </li>
            <li className={`${styles.item} ${!creating_infographics ? styles.over : ''}`}>
              <span>3</span>
                            Создание инфографики
            </li>
            <li className={`${styles.item} ${!access_to_educational_materials ? styles.over : ''}`}>
              <span>4</span>
                            Доступ к обучающим материалам
            </li>
            <li className={styles.item}>
              <span>5</span>
                            Сохранение в разрешении {save_in_resolution}
            </li>
            <li className={`${styles.item} ${!generation_templates ? styles.over : ''}`}>
              <span>6</span>
                            Генерация фона по {generation_templates} шаблонам
            </li>
            <li className={`${styles.item} ${!generation_of_any_backgrounds ? styles.over : ''}`}>
              <span>7</span>
                            Генерация ЛЮБЫХ фонов
            </li>
            <li className={`${styles.item} ${!working_with_saved_images ? styles.over : ''}`}>
              <span>8</span>
                            Возможность работать с сохраненными изображениями
            </li>
            <li className={`${styles.item} ${!seven_days_of_access_to_advertising ? styles.over : ''}`}>
              <span>9</span>
                            7 дней бесплатного доступа к сервису по настройке рекламы
            </li>
            <li className={`${styles.item} ${!authors_background_templates ? styles.over : ''}`}>
              <span>10</span>
                            Авторские шаблоны фона
            </li>
            <li className={`${styles.item} ${!design_infographic_templates ? styles.over : ''}`}>
              <span>11</span>
                            Дизайнерские шаблоны инфографики
            </li>
            <li className={`${styles.item} ${!template_auto_update ? styles.over : ''}`}>
              <span>12</span>
                            Автообновление шаблонов
            </li>
          </ul>

        </div>
      </label>
    </div>
  );
};


export default PricingCard;