import styles from './UploadField.module.scss';
import getBase64 from '../../../../helpers/getBase64';
import { IUploadField } from '../../types';
import {FC, useState} from 'react';
import { MoonLoader } from 'react-spinners';
import {motion} from 'framer-motion';
import MainApi from '../../../../service/MainApi';

const apiMain = new MainApi()

const UploadField:FC<IUploadField> = ({
    onComplete
}) => {
    const [load, setLoad] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            const file = e.target.files[0]
            setLoad(true)

            const data = new FormData()
            data.append('file', file)

            apiMain.fileToBase64(data).then(res => {
                console.log(res)
                onComplete && onComplete(res)
            })


            // getBase64(e.target.files[0]).then(res => {
            //     onComplete && onComplete(res)
            // }).finally(() => setLoad(false))



            // const img = new Image();
            // img.onload = function () {
            //     if(img.width === 100 && img.height === 100) {
            //         onComplete && onComplete(file)
            //     } else {
            //         // console.log('error')
            //         alert('Размер картинки не соответствует требованию (100x100)')
            //     }
            //     setLoad(false)
            // };
            //img.src = URL.createObjectURL(file);

            
            // onComplete && onComplete(file)
        }
    }

    return (
        <div className={styles.wrapper}>
            {load && <div className={styles.load}><MoonLoader color='#fff'/></div>}
            <input value={''} id='upload-image' type="file" accept='.png, .jpg, .jpeg' onChange={onChange}/>
            <div className={`${styles.in} ${load ? styles.hide : ''}`}>
                <label htmlFor='upload-image' className={styles.btn}>Выбрать фото</label>
            </div>    
        </div>
    )
}

export default UploadField;