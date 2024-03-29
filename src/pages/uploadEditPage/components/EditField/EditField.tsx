import Button from '@components/Button/Button';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import MainApi from '@service/MainApi';
import { main_updateCurrentCanvas, main_updateLoading } from '@store/slices/mainSlice/mainSlice';
import { fabric } from 'fabric';
import { Image } from 'fabric/fabric-impl';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UploadField from '../UploadField/UploadField';
import styles from './EditField.module.scss';

const service = new MainApi();

const EditField = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { token, marketId, selectedMarket } = useAppSelector(s => s.mainReducer);
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [bgRemoved, setBgRemoved] = useState<string>('');
  const [ratioDiff, setRatioDiff] = useState(0);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const navigate = useNavigate();

  const onRemoveBg = () => {
    if (uploadedFile && token) {

      dispatch(main_updateLoading(true));
      service.peb_removeBg(token, { image: uploadedFile }).then(res => {
        console.log(res?.data);
        if (res?.data) {
          setBgRemoved(res?.data);
        } else {
          alert('Произошла ошибка');
        }
      }).finally(() => {
        dispatch(main_updateLoading(false));
      });

      // setBgRemoved(service.getChairBase64);
    }
  };

  const initCanvas = () => {
    const canvas = new fabric.Canvas('test-canvas', {
      width: mainContainerRef?.current?.scrollWidth,
      height: mainContainerRef?.current?.scrollHeight,
      containerClass: 'test-canvas'
    });
    setCanvas(canvas);
  };

  useEffect(() => {
    if (bgRemoved) {
      initCanvas();
    }
  }, [bgRemoved]);

  useEffect(() => {
    if (canvas && bgRemoved) {
      fabric.Image.fromURL(`data:image/png;base64,${bgRemoved}`, (oImg: Image) => {
        canvas?.add(oImg);
        canvas.getObjects()[0].set({
          borderColor: '#56AEFF',
          cornerColor: '#fff',
          transparentCorners: false,
          cornerSize: 6,
          cornerStrokeColor: '#56AEFF',
          scaleX: 0.5,
          scaleY: 0.5,
        });
      });
    }
  }, [canvas, bgRemoved]);

  useEffect(() => {
    if (token && selectedMarket) {
      const x = selectedMarket.size_x;
      const y = selectedMarket.size_y;
      setRatioDiff(Math.trunc(100 * (y - x) / x));
    }
  }, [token, selectedMarket]);

  const testDownload = () => {
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();

      link.download = 'test.png';
      link.click();
    }
  };

  const onReset = () => {
    setBgRemoved('');
    setUploadedFile('');
    setCanvas(null);
  };

  const onNext = () => {
    if (canvas) {
      const canvasJson = canvas?.toJSON();

      dispatch(main_updateCurrentCanvas(canvasJson));
      navigate('/templates');
    }
  };

  return (
    <div className={styles.wrapper}>
      {
        marketId && (
          <div ref={mainContainerRef} className={styles.main} style={{ paddingBottom: `${100 + ratioDiff}%` }}>
            {/* {
                            uploadedFile && !bgRemoved ?
                                // <div className={styles.image}>
                                //     <img src={'data:image/png;base64,' + uploadedFile} alt="" />
                                // </div>
                                null
                            : !bgRemoved && <UploadField onComplete={setUploadedFile}/>
                        } */}

            {
              uploadedFile ? (
                bgRemoved ? (
                  // <div className={styles.image}>
                  //     <img src={'data:image/png;base64,' + bgRemoved} alt=""/>
                  // </div>
                  <div className={styles.editor}>
                    <canvas id='test-canvas' />
                  </div>
                ) : (
                  <div className={styles.image}>
                    <img src={'data:image/png;base64,' + uploadedFile} alt="" />
                  </div>
                )
              ) : (
                <UploadField onComplete={setUploadedFile} />
              )
            }
          </div>
        )
      }


      <div className={styles.action}>
        <div className={styles.action_main}>
          {
            marketId ? (
              !bgRemoved ? (
                <div className={styles.item}>
                  <Button
                    onClick={onRemoveBg}
                    disabled={!uploadedFile}
                    text='Вырезать фон'
                    variant={'violet'}
                    fill
                  />
                </div>
              ) : (
                <>
                  <div className={styles.item}>
                    <Button
                      fill
                      text='Продолжить'
                      onClick={onNext}
                    />
                  </div>
                  <div className={styles.item}>
                    <Button
                      onClick={onReset}
                      fill
                      text='Загрузить новое'
                      variant={'light-violet'}
                    />
                  </div>
                  <div className={styles.item}>
                    <Button
                      onClick={testDownload}
                      fill
                      text='Скачать'
                      variant={'light-violet'}
                    />
                  </div>
                </>
              )
            ) : (
              <div className={styles.item}>
                <Button
                  text='Выберите маркетплейс'
                  fill
                  onClick={() => navigate('/format')}
                />
              </div>
            )
          }
          {/* <div className={styles.item}><Button text='to json' fill onClick={() => {
                        console.log(canvas.toDataURL())
                        console.log(canvas.toSVG())
                        console.log(canvas.toJSON())
                    }}/></div> */}
        </div>
      </div>
    </div>
  );
};


export default EditField;







{/* <div className={styles.action_main}>
    <div className={styles.item}>
        <IconButton
            label='Уточнить фон'
            icon={<BiEraser/>}
            onClick={removeBg}
            />
    </div>
    <div className={styles.item}>
        <Button
            text='Продолжить'
            variant={'violet'}
            fill
            />
    </div>
    <div className={styles.item}>
        <Button
            text='Загрузить новое'
            variant={'light-violet'}
            onClick={() => setUploadedFile('')}
            fill
            />
    </div>
    <div className={styles.item}>
        <Button
            disabled
            beforeIcon={<MdLock/>}
            text='Скачать'
            variant={'light-violet'}
            fill
            />
    </div>
</div> */}