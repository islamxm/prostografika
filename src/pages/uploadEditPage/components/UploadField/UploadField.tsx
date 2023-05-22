import styles from './UploadField.module.scss';
import getBase64 from '../../../../helpers/getBase64';
import { IUploadField } from '../../types';
import {FC, useState} from 'react';
import { MoonLoader } from 'react-spinners';


const UploadField:FC<IUploadField> = ({
    onComplete
}) => {
    const [load, setLoad] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            setLoad(true)
            getBase64(e.target.files[0]).then(res => {
                onComplete && onComplete(res)
            }).finally(() => setLoad(false))
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