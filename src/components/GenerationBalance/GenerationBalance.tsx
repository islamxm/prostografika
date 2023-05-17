import styles from './GenerationBalance.module.scss';
import {FC} from 'react';
import { IGenerationBalance } from './types';


const GenerationBalance:FC<IGenerationBalance> = ({
    total = 0,
    remainder = 0
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.value}>
                {remainder}<span>/{total}</span>
            </div>
            <div className={styles.label}>Количество генераций</div>
        </div>
    )
}

export default GenerationBalance;