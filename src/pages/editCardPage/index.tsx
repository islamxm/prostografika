import Button from '@components/Button/Button';
import ColorEditor from '@components/color-editor';
import Headline from '@components/Headline/Headline';
import SvgEditor from '@components/svg-editor';
import TextCreator from '@components/text-creator';
import TextEditor from '@components/text-editor';
import { useCustomRef } from '@hooks/customRef';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setCardSize } from '@store/slices/mainSlice/mainSlice';
import { createDeleteControl } from '@utils/fabricControls';
import { fabric } from 'fabric';
import { IEvent, Image } from 'fabric/fabric-impl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { CustomCanvas } from './customCanvas';
import styles from './styles.module.scss';

const EditCardPage = () => {
  const dispatch = useAppDispatch();

  const [canvasContainerRef, setCanvasContainerRef] = useCustomRef<HTMLDivElement>();
  const [canvasRef, setCanvseRef] = useCustomRef<HTMLCanvasElement>();
  const [canvas, setCanvasObject] = useState<CustomCanvas | null>(null);
  const { token, selectedMarket, currentCanvas: canvasDataJSON, selectedTemplate } = useAppSelector(s => s.mainReducer);

  const [selectedTextObject, setSelectedTextObject] = useState<fabric.IText | null>(null);
  const [selectedSvgObject, setSelectedSvgObject] = useState<fabric.Group | null>(null);
  const [step, setStep] = useState<'colorStep' | 'textStep'>('colorStep');

  const handleColorChange = (color: string) => {
    if (canvas === null) {
      return;
    }
    // if (selectedTemplate?.type === 'image') {
    if ((selectedTemplate as any).id) {
      if (canvas.backgroundImage) {
        const image = canvas.backgroundImage as Image;
        const filter = image.filters![0] as fabric.IBlendColorFilter;
        filter.color = color;
        image.applyFilters();
        canvas.requestRenderAll();
        canvas.fire('bgChange');
      }
    } else {
      canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
    }
  };

  const handleGradientChange = (gradient: fabric.Gradient) => {
    if (canvas) {
      canvas.setBackgroundColor(gradient, canvas.renderAll.bind(canvas));
    }
  };

  const handleObjectSelect = (e: IEvent<MouseEvent>) => {
    const obj = e.selected?.find((o) => o.isType('i-text'));
    if (obj) {
      setSelectedTextObject(obj as fabric.IText);
      return;
    }

    const svgObj = e.selected?.find((o) => o.isType('group'));
    if (svgObj) {
      setSelectedSvgObject(svgObj as fabric.Group);
    }
  };

  const handleCreateText = () => {
    if (canvas) {
      const text = new fabric.IText('TEXT', { left: 100, top: 100 });
      text.transparentCorners = false;
      text.cornerColor = 'blue';
      text.cornerStyle = 'circle';
      text.controls.deleteControl = createDeleteControl();
      canvas.add(text);
      canvas.setActiveObject(text);
    }
  };

  const handleCreateIcon = (icon: string) => {
    if (canvas) {
      fabric.loadSVGFromURL(icon, (objs) => {
        const svgGroup = new fabric.Group(objs, { left: 100, top: 100 });
        svgGroup.transparentCorners = false;
        svgGroup.cornerColor = 'blue';
        svgGroup.cornerStyle = 'circle';
        svgGroup.controls.deleteControl = createDeleteControl();
        canvas.add(svgGroup);
        canvas.setActiveObject(svgGroup);
      });
    }
  };

  useEffect(() => {
    if (!token || canvas || !canvasRef || !canvasContainerRef || !selectedMarket) {
      return;
    }

    const x = selectedMarket.size_x;
    const y = selectedMarket.size_y;
    const ratio = Math.trunc(100 * (y - x) / x);
    canvasContainerRef.style.paddingBottom = `${100 + ratio}%`;

    dispatch(setCardSize({
      width: canvasContainerRef.clientWidth,
      height: canvasContainerRef.clientHeight
    }));

    const cv = new CustomCanvas(canvasRef, {
      width: canvasContainerRef.clientWidth,
      height: canvasContainerRef.clientHeight,
    });

    cv.loadFromJSON(canvasDataJSON, () => {
      // if (selectedTemplate && selectedTemplate.type === 'image') {
      if (selectedTemplate) {
        fabric.Image.fromURL(`data:image/png;base64,${(selectedTemplate as any).image}`, (img: Image) => {
          const colorFilter = new fabric.Image.filters.BlendColor();

          img.filters = [colorFilter];
          img.scaleToWidth(cv.width!);
          img.scaleToHeight(cv.height!);
          img.originX = 'left';
          img.originY = 'top';
          cv.setBackgroundImage(img, cv.renderAll.bind(cv));
          cv.initHistory();
        });
      }

      cv.on('selection:created', handleObjectSelect);
      cv.on('selection:updated', handleObjectSelect);
      cv.on('selection:cleared', () => {
        setSelectedTextObject(null);
        setSelectedSvgObject(null);
      });
      setCanvasObject(cv);
    });
  }, [token, canvasRef, canvasContainerRef, selectedMarket, canvasDataJSON]);

  const handleDownload = () => {
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'card.png';
      link.click();
    }
  };

  if (selectedTemplate === null) {
    return (<></>);
  }

  return (
    <motion.div style={{ position: 'relative' }}>
      <Headline title='Изменить цвет' />
      <TextEditor
        canvasTextObject={selectedTextObject}
        requestRenderAll={() => canvas?.requestRenderAll()}
      />
      <SvgEditor
        canvasSvgObject={selectedSvgObject}
        requestRenderAll={() => canvas?.requestRenderAll()}
      />
      <div ref={setCanvasContainerRef} className={styles.canvasContainer}>
        <div className={styles.editor}>
          <canvas ref={setCanvseRef} id='canvas' />
        </div>
      </div>

      {step === 'colorStep' && (
        <ColorEditor
          handleColorChange={handleColorChange}
          handleGradientChange={handleGradientChange}
        />
      )}
      {step === 'textStep' && (
        <TextCreator
          createText={handleCreateText}
          createIcon={handleCreateIcon}
        />
      )}

      <div className={styles.buttonsGroup}>
        <Button
          text={step === 'colorStep' ? 'Дальше' : 'Назад'}
          onClick={() => {
            setStep((prev) => prev === 'colorStep' ? 'textStep' : 'colorStep');
          }}
        />
        {step === 'textStep' && <Button onClick={handleDownload} text='Скачать' />}
      </div>
    </motion.div>
  );
};

export default EditCardPage;