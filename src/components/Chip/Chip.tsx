import styles from './Chip.module.scss';
import {FC} from 'react';
import { IChip } from './types';

const Chip:FC<IChip> = ({
    id,
    label = 'chip',
    onSelect,
    isActive,
    style
}) => {

    return (
        <div onClick={() => onSelect && onSelect(id)} style={style} className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
            <div className={styles.label}>{label}</div>
        </div>
    )
}

export default Chip;