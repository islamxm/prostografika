import styles from './EditField.module.scss';
import UploadField from '../UploadField/UploadField';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import {MdLock} from 'react-icons/md';
import IconButton from '../../../../IconButton/IconButton';
import {BiEraser} from 'react-icons/bi';
import PebApi from '../../../../service/PebApi';



const apiPeb = new PebApi()

const EditField = () => {
    const [uploadedFile, setUploadedFile] = useState('') 

    useEffect(() => {
        console.log(uploadedFile)
    }, [uploadedFile])


    const removeBg = () => {
        apiPeb.removeBg({image: uploadedFile}, '06e6d852-ada5-4ad2-b77c-3521fcf18e56').then(res => {
            console.log(res)
        })
        // apiPeb.getCredits('06e6d852-ada5-4ad2-b77c-3521fcf18e56').then(res => {
        //     console.log(res)
        // })
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {
                    uploadedFile ? 
                        <div className={styles.image}>
                            <img src={uploadedFile} alt="" />
                        </div>    
                    : <UploadField onComplete={setUploadedFile}/>
                }
            </div>
            <div className={styles.action}>
                {
                    uploadedFile ? (
                        <div className={styles.action_main}>
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
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}


export default EditField;