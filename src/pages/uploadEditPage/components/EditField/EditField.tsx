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


const service = new MainApi()

const EditField = () => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [uploadedFile, setUploadedFile] = useState<string>('') 
    

    


    
    const removeBg = () => {
        if(uploadedFile && token) {
            const data = new FormData()
            data.append('image', uploadedFile)
            // service.peb_credits(token).then(res => {
            //     console.log(res)
            // })
            // service.peb_removeBg(token, {image: uploadedFile}).then(res => {
            //     console.log(res)
            // })
        }
    }

    // useEffect(() => {
    //     removeBg()
    // }, [uploadedFile])


    
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {
                    uploadedFile ? 
                        <div className={styles.image}>
                            <img src={'data:image/png;base64,' + uploadedFile} alt="" />
                        </div>    
                    : <UploadField onComplete={setUploadedFile}/>
                }
            </div>
            <div className={styles.action}>
                <div className={styles.action_main}>
                    <div className={styles.item}>
                    <Button
                        onClick={removeBg}
                        disabled={!uploadedFile}
                        text='Вырезать фон'
                        variant={'violet'}
                        fill
                        />
                    </div>
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