import ColorEditor from '@components/color-editor';
import Headline from '@components/Headline/Headline';
import ImageEditor from '@components/image-editor';
import { useCustomRef } from '@hooks/customRef';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import MainApi from '@service/MainApi';
import { main_updateMarketId, setCardSize } from '@store/slices/mainSlice/mainSlice';
import { fabric } from 'fabric';
import { Image } from 'fabric/fabric-impl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import BrightnessController from '../../components/color-editor/components/BrightnessController';
import styles from './styles.module.scss';

const service = new MainApi();

const chairBase64 = service.getTestBase64();
const bgBase64 = service.getTestBgBase64();
const bgBase641 = service.getTestBgBase641();
const bgBase642 = service.getTestBgBase642();

const EditCardPage = () => {
  // -----------------------TEMP-START----------------------------
  const dispatch = useAppDispatch();
  const { markets } = useAppSelector(s => s.mainReducer);

  useEffect(() => {
    dispatch(main_updateMarketId(1));
  }, [markets]);
  // -----------------------TEMP-END----------------------------

  const [canvasContainerRef, setCanvasContainerRef] = useCustomRef<HTMLDivElement>();
  const [canvasRef, setCanvseRef] = useCustomRef<HTMLCanvasElement>();
  const [canvas, setCanvasObject] = useState<fabric.Canvas | null>(null);
  const { token, selectedMarket, currentCanvas: canvasDataJSON, selectedTemplate } = useAppSelector(s => s.mainReducer);

  const [colorFilter, setColorFilter] = useState<fabric.IBlendColorFilter | null>(null);
  const [brightFilter, setBrightFilter] = useState<fabric.IBrightnessFilter | null>(null);
  const [bgImage, setBgImage] = useState<Image | null>(null);

  const handleImageColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (colorFilter) {
      colorFilter.color = e.target.value;
      bgImage?.applyFilters();
      canvas?.requestRenderAll();
    }
  };

  // const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (brightFilter) {
  //     brightFilter.setOptions({ brightness: e.target.value });
  //     bgImage?.applyFilters();
  //     canvas?.requestRenderAll();
  //   }
  // };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas) {
      canvas.setBackgroundColor(e.target.value, canvas.renderAll.bind(canvas));
    }
  };

  const handleGradientChange = (gradient: fabric.Gradient) => {
    if (canvas) {
      canvas.setBackgroundColor(gradient, canvas.renderAll.bind(canvas));
    }
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (brightFilter) {
      brightFilter.setOptions({ brightness: e.target.value });
      bgImage?.applyFilters();
      canvas?.requestRenderAll();
    }
  };

  useEffect(() => {
    if (!token || canvas || !canvasRef || !canvasContainerRef || !selectedMarket) {
      return;
    }

    dispatch(setCardSize({
      width: canvasContainerRef.clientWidth,
      height: canvasContainerRef.clientHeight
    }));
    const x = selectedMarket.size_x;
    const y = selectedMarket.size_y;
    const ratio = Math.trunc(100 * (y - x) / x);
    canvasContainerRef.style.paddingBottom = `${100 + ratio}%`;

    const cv = new fabric.Canvas(canvasRef);

    // ------------------TEMP----------------
    fabric.Image.fromURL(`data:image/png;base64,${chairBase64}`, (img) => {
      cv.add(img);
    });
    // ------------------TEMP----------------

    cv
      .setWidth(canvasContainerRef.clientWidth)
      .setHeight(canvasContainerRef.clientHeight);
    // .loadFromJSON(canvasDataJSON, () => {
    // CONTINUE HERE
    // });

    if (selectedTemplate && selectedTemplate.type === 'image') {
      fabric.Image.fromURL(`data:image/png;base64,${selectedTemplate.image}`, (img: Image) => {
        const colorFilter = new fabric.Image.filters.BlendColor();
        const brightFilter = new fabric.Image.filters.Brightness();

        img.filters = [colorFilter, brightFilter];
        img.scaleToWidth(cv.width!);
        img.scaleToHeight(cv.height!);
        img.originX = 'left';
        img.originY = 'top';
        cv.setBackgroundImage(img, cv.renderAll.bind(cv));
        setColorFilter(colorFilter);
        // setBrightFilter(brightFilter);
        setBgImage(img);
      });
    }

    setCanvasObject(cv);
  }, [token, canvasRef, canvasContainerRef, selectedMarket, canvasDataJSON]);

  if (selectedTemplate === null) {
    return (<></>);
  }

  return (
    <motion.div>
      <Headline title='Изменить цвет' />
      <div ref={setCanvasContainerRef} className={styles.canvasContainer}>
        <div className={styles.editor}>
          <canvas ref={setCanvseRef} id='canvas' />
        </div>
      </div>
      {selectedTemplate.type === 'color' ? (
        <ColorEditor
          handleBrightnessChange={handleBrightnessChange}
          handleColorChange={handleColorChange}
          handleGradientChange={handleGradientChange}
        />
      ) : (<ImageEditor handleColorChange={handleImageColorChange} />)}

    </motion.div>
  );
};

export default EditCardPage;