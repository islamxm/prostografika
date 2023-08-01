import Button from '@components/Button/Button';
import Headline from '@components/Headline/Headline';
import TextArea from '@components/TextArea/TextArea';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import MainApi from '@service/MainApi';
import { main_updateLoading } from '@store/slices/mainSlice/mainSlice';
import pageEnterExitAnim from '@utils/pageEnterExitAnim';
import { Col, Row } from 'antd';
import { fabric } from 'fabric';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './PersonalGenPage.module.scss';

const service = new MainApi();


const PersonalGenPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentCanvas, token } = useAppSelector(s => s.mainReducer);
  const [canvas, setCanvas] = useState<any>(null);
  const [sourcePrev, setSourcePrev] = useState('');
  const [styleImages, setStyleImages] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<{ source: string, index: number } | null>(null);


  const initCanvas = () => {
    const canvas = new fabric.Canvas('test-canvas', {
      width: 140,
      height: 140,
      containerClass: 'test-canvas'
    });
    setCanvas(canvas);
  };

  useEffect(() => {
    if (currentCanvas) {
      console.log(currentCanvas?.objects[0]?.src);
      setSourcePrev(currentCanvas?.objects[0]?.src);
    }
    // else {
    //     navigate('/format')
    // }

  }, [currentCanvas, navigate]);

  // useEffect(() => {
  //     if(canvas) {
  //         canvas?.loadFromJSON(currentCanvas, canvas.renderAll.bind(canvas), (o: any) => {
  //             console.log(o)
  //         })
  //     }
  // }, [canvas])

  const onAddStyleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];

      dispatch(main_updateLoading(true));
      const body = new FormData();
      body.append('file', file);
      service.getBase64(token, body).then(res => {
        console.log(res);
        if (res?.conv_file) {
          setStyleImages(s => [...s, `data:image/png;base64,${res?.conv_file}`]);
        }
      }).finally(() => {
        dispatch(main_updateLoading(false));
      });
    }
  };


  const createBg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (token) {
      const data = new FormData();
      //const file = dataURLtoFile(currentCanvas?.objects[0]?.src, 'test.png')
      if (e.target.files !== null) {
        const file = e.target.files[0];
        data.append('file', file);
        service.getBase64(token, data).then(res => {
          if (res?.conv_file) {
            service.peb_removeBg(token, { image: res?.conv_file }).then(res => {
              // console.log(res)
              console.log(res?.data);
              if (res?.data) {
                service.peb_createBg(token, {
                  images: [res?.data],
                  // style_image: selectedStyle?.source,
                  width: 510,
                  height: 510,
                  description: 'bottle on the table',
                  negative: 'red, blue'
                }).then(res => {
                  console.log(res);
                });
              }


            });
          }
        });
      }
    }
  };



  return (
    <>
      <motion.div  {...pageEnterExitAnim} className={styles.wrapper}>
        <Headline
          title='Персональная
                    генерация'
          generationBalance={true}
        />
        <div className={styles.body}>
          <Row gutter={[25, 25]}>
            <Col span={24}>
              <div className={styles.part}>
                <div className={styles.source}>

                  {/* {
                                            sourcePrev && <img src={sourcePrev} alt="" />
                                        } */}
                  <input onChange={createBg} type="file" accept='.png, .jpg' id='test-test' />
                  {/* <label htmlFor="test-test"></label> */}
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
                  <Row gutter={[10, 10]}>
                    <Col span={8}>
                      <div onClick={() => setSelectedStyle(null)} className={styles.add}>нет</div>
                    </Col>
                    <Col span={8}>
                      <div className={styles.add}>
                        <input onChange={onAddStyleImage} id='add-style-image' type="file" accept='.png, .jpg' />
                        <label htmlFor="add-style-image">Добавить свое</label>
                      </div>
                    </Col>
                    {
                      styleImages?.map((item, index) => (
                        <Col span={8} key={index}>
                          <div
                            onClick={() => setSelectedStyle({ source: item, index })}
                            className={`${styles.item} ${index === selectedStyle?.index ? styles.active : ''}`}>
                            <img src={item} alt="" />
                          </div>
                        </Col>
                      ))
                    }

                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </motion.div>
      <div className={styles.action}>
        <Button
          // onClick={createBg}
          text='Создать'
          fill
        />
      </div>
    </>
  );
};

export default PersonalGenPage;