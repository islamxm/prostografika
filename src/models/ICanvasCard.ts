interface ICanvasCard {
    thumbnail: string,
    svg: string,
    objects: Array<
        {
            angle: number,
            backgroundColor: string,
            cropX: number,
            cropY: number,
            crossOrigin: null,
            fill: string,
            fillRule: string,
            filters: Array<unknown>,
            flipX: boolean,
            flipY: boolean,
            globalCompositeOperation: string,
            height: number,
            left: number,
            opacity: number,
            originX: string,
            originY: string,
            paintFirst: string,
            scaleX: number,
            scaleY: number,
            shadow: null,
            skewX: number,
            skewY: number,
            src: string,
            stroke: null,
            strokeDashArray: null,
            strokeDashOffset: number,
            strokeLineCap: string,
            strokeLineJoin: string,
            strokeMiterLimit: number,
            strokeUniform: number
        }
    >
}

export default ICanvasCard;