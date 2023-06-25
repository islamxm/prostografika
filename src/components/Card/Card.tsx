import styles from './Card.module.scss';
import IconButton from '../../IconButton/IconButton';
import {CgClose} from 'react-icons/cg';
import MainApi from '../../service/MainApi';
import { useAppSelector } from '../../hooks/reduxHooks';
const service = new MainApi;

const Card = (props: any) => {
    const {onUpdate, id} = props || {}
    const {token} = useAppSelector(s => s.mainReducer)

    const onDelete = () => {
        if(token && id) {
            service.deleteCard(token, id.toString()).then(res => {
                console.log(res)
                onUpdate && onUpdate()
            })
        }
    }


    return (
        <div
            className={styles.wrapper}>
            <div className={styles.action}>
                <div className={styles.item}>
                    <IconButton
                        onClick={() => {
                            onDelete()
                        }}
                        icon={<CgClose/>}
                        size={20}
                        />
                </div>
            </div>
            <div className={styles.body}>
                <img src={props?.svg} alt="" />
            </div>
        </div>
    )
}


export default Card;