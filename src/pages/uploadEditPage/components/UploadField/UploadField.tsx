import styles from './UploadField.module.scss';
import getBase64 from '../../../../helpers/getBase64';
import { IUploadField } from '../../types';
import {FC, useState} from 'react';
import { MoonLoader } from 'react-spinners';
import {motion} from 'framer-motion';
import MainApi from '../../../../service/MainApi';
import { useAppSelector } from '../../../../hooks/reduxHooks';

const service = new MainApi()

const UploadField:FC<IUploadField> = ({
    onComplete
}) => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [load, setLoad] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            const file = e.target.files[0]
            setLoad(true)

            const data = new FormData()
            data.append('file', file)

            
            if(token) {
                service.getBase64(token, data).then(res => {
                    console.log(res)
                }).finally(() => {
                    setLoad(false)
                })
            }


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