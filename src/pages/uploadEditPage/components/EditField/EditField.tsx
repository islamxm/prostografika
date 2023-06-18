import styles from './EditField.module.scss';
import UploadField from '../UploadField/UploadField';
import { useEffect, useState, useRef } from 'react';
import Button from '../../../../components/Button/Button';
import IconButton from '../../../../IconButton/IconButton';
import {BiEraser} from 'react-icons/bi';
import { useAppSelector, useAppDispatch } from '../../../../hooks/reduxHooks';
import { main_updateLoading } from '../../../../store/slices/mainSlice/mainSlice';
import MainApi from '../../../../service/MainApi';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { fabric } from 'fabric';
import testImg from '../../../../utils/testImg';
import { ICanvasOptions, StaticCanvas } from 'fabric/fabric-impl';
import { useNavigate } from 'react-router-dom';
type IC = ICanvasOptions & StaticCanvas

const service = new MainApi()

const EditField = () => {
    const mainContainerRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const {token, marketId} = useAppSelector(s => s.mainReducer)
    const [uploadedFile, setUploadedFile] = useState<string>('') 
    const [bgRemoved, setBgRemoved] = useState<string>('')
    const {editor, onReady} = useFabricJSEditor()
    const [ratioDiff, setRatioDiff] = useState(0)
    const [canvas, setCanvas] = useState<any | null>(null)
    const navigate = useNavigate()

    
    const onRemoveBg = () => {
        if(uploadedFile && token) {

            dispatch(main_updateLoading(true))
            service.peb_removeBg(token, {image: uploadedFile}).then(res => {
                console.log(res?.data)
                if(res?.data) {
                    setBgRemoved(res?.data)
                } else {
                    alert('Произошла ошибка')
                }
            }).finally(() => {
                dispatch(main_updateLoading(false))
            })


            // service.peb_removeBg(token, {image: uploadedFile}).then(res => {
            //     setBgRemoved(res?.data)
            //     console.log(res)
            //     fabric.Image.fromURL(`data:image/png;base64,${res?.data}`, (oImg) => {
            //         editor?.canvas.add(oImg)
            //     })
            // })



            // fabric.Image.fromURL(`data:image/png;base64,${testImg}`, (oImg) => {
            //     // setBgRemoved(testImg)
            //     // editor?.canvas.add(oImg)
            //     canvas?.add(oImg)
            //         // editor?.canvas.
            // })
        }
    }

    const initCanvas = () => {
        const canvas = new fabric.Canvas('test-canvas', {
            width: mainContainerRef?.current?.scrollWidth,
            height: mainContainerRef?.current?.scrollHeight,
            containerClass: 'test-canvas'
        })  
        setCanvas(canvas)
    }

    useEffect(() => {
        if(bgRemoved) {
            initCanvas()
        }
    }, [bgRemoved])


    useEffect(() => {
        if(canvas && bgRemoved) {
            fabric.Image.fromURL(`data:image/png;base64,${bgRemoved}`, (oImg: any) => {
                canvas?.add(oImg)
                canvas.item(0).set({
                    borderColor: '#56AEFF',
                    cornerColor: '#fff',
                    transparentCorners: false,
                    cornerSize: 6,
                    cornerStrokeColor: '#56AEFF',
                    scaleX: 0.5,
                    scaleY: 0.5,
                    selectionBorderColor: '#000'
                })
            })
        }
    }, [canvas, bgRemoved])


    useEffect(() => {
        if(token && marketId) {
            dispatch(main_updateLoading(true))
            service.getMarket(marketId, token).then(res => {
                const x = res?.size_x
                const y = res?.size_y
                setRatioDiff(Math.trunc(100 * (y - x) / x))
            }).finally(() => dispatch(main_updateLoading(false)))
        }
    }, [token, marketId])



    const testDownload = () => {
        if(canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL()
            // link.setAttribute('download', canvas.toDataURL())
            link.download = 'test.png'
            link.click()
        }
    }


    const onReset = () => {
        setBgRemoved('')
        setUploadedFile('')
        setCanvas(null)
    }


    return (
        <div className={styles.wrapper}>
            {
                marketId && (
                    <div ref={mainContainerRef} className={styles.main} style={{paddingBottom: `${100 + ratioDiff}%`}}>
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
                                        <canvas id='test-canvas'/>
                                    </div>
                                ) : (
                                    <div className={styles.image}>
                                        <img src={'data:image/png;base64,' + uploadedFile} alt=""/>
                                    </div> 
                                )
                            ) : (
                                <UploadField onComplete={setUploadedFile}/>
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
                                            onClick={() => navigate('/templates')}
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
    )
}


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