import styles from './EditField.module.scss';
import UploadField from '../UploadField/UploadField';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import {MdLock} from 'react-icons/md';
import IconButton from '../../../../IconButton/IconButton';
import {BiEraser} from 'react-icons/bi';
import PebApi from '../../../../service/PebApi';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import MainApi from '../../../../service/MainApi';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { fabric } from 'fabric';
import testImg from '../../../../utils/testImg';
import { ICanvasOptions, StaticCanvas } from 'fabric/fabric-impl';

type IC = ICanvasOptions & StaticCanvas

const service = new MainApi()

const EditField = () => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [uploadedFile, setUploadedFile] = useState<string>('') 
    const [bgRemoved, setBgRemoved] = useState<string>('')
    const {editor, onReady} = useFabricJSEditor()
    
    const [canvas, setCanvas] = useState<any | null>(null)

    
    const onRemoveBg = () => {
        if(uploadedFile && token) {
            // service.peb_removeBg(token, {image: uploadedFile}).then(res => {
            //     setBgRemoved(res?.data)
            //     console.log(res)
            //     fabric.Image.fromURL(`data:image/png;base64,${res?.data}`, (oImg) => {
            //         editor?.canvas.add(oImg)
            //     })
            // })
            fabric.Image.fromURL(`data:image/png;base64,${testImg}`, (oImg) => {
                // setBgRemoved(testImg)
                // editor?.canvas.add(oImg)
                canvas?.add(oImg)

                    // editor?.canvas.
            })

        }
    }

    const initCanvas = () => {
        const canvas = new fabric.Canvas('test-canvas', {
            width: 355,
            height: 355,
            containerClass: 'test-canvas'
        })
        
        
        
        
        setCanvas(canvas)
        
    }

    useEffect(() => {
        initCanvas()
    }, [])

    useEffect(() => {
        if(canvas) {
            fabric.Image.fromURL(`data:image/png;base64,${testImg}`, (oImg) => {
                canvas?.add(oImg)
                canvas.item(0).set({
                    borderColor: '#56AEFF',
                    cornerColor: '#fff',
                    transparentCorners: false,
                    cornerSize: 6,
                    cornerStrokeColor: '#56AEFF',

                    
                    scaleX: 0.5,
                    scaleY: 0.5
                })

            })

            fabric.Image.fromURL(`data:image/png;base64,${testImg}`, (oImg) => {
                canvas?.add(oImg)
                canvas.item(1).set({
                    borderColor: '#56AEFF',
                    cornerColor: '#fff',
                    transparentCorners: false,
                    cornerSize: 6,
                    cornerStrokeColor: '#56AEFF',

                    
                    scaleX: 0.5,
                    scaleY: 0.5
                })

            })

        }
    }, [canvas])


  

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {/* {
                    uploadedFile && !bgRemoved ? 
                        // <div className={styles.image}>
                        //     <img src={'data:image/png;base64,' + uploadedFile} alt="" />
                        // </div>   
                        null
                    : !bgRemoved && <UploadField onComplete={setUploadedFile}/>
                } */}
                {/* <FabricJSCanvas
                    className={`test-canvas ${uploadedFile ? 'active' : ''}`}
                    onReady={onReady}
                    /> */}
                <div className={styles.editor}>
                <canvas id='test-canvas'/>
                </div>
                
            </div>
            
            <div className={styles.action}>
                <div className={styles.action_main}>
                    {
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
                        ) : null
                    }
                    <div className={styles.item}><Button text='to json' fill onClick={() => {
                        console.log(canvas.toDataURL())
                        console.log(canvas.toSVG())
                        console.log(canvas.toJSON())
                    }}/></div>
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