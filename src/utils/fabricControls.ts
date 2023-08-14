import iconCross from '@icons/icon-cross.png';
import { fabric } from 'fabric';
import { Transform } from 'fabric/fabric-impl';

export const createDeleteControl = (): fabric.Control => {
  const renderIcon: fabric.Control['render'] = (ctx, left, top, styleOverride, fabricObject) => {
    const imgTag = document.createElement('img');
    imgTag.src = iconCross;
    const size = 16;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle ?? 0));
    ctx.drawImage(imgTag, -size / 2, -size / 2, size, size);
    ctx.restore();
  };

  const deleteObject: fabric.Control['mouseUpHandler'] = (eventData: MouseEvent, transform: Transform, x: number, y: number) => {
    const target = transform.target;
    const canvas = target.canvas;
    if (canvas) {
      canvas.remove(target);
      canvas.requestRenderAll();
      return true;
    }
    return false;
  };

  return new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: 16,
    cursorStyle: 'pointer',
    render: renderIcon,
    mouseUpHandler: deleteObject,
  });
};