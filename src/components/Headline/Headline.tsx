import styles from './Headline.module.scss';
import {FC} from 'react';
import { IHeadline } from './types';
import GenerationBalance from '../GenerationBalance/GenerationBalance';

const Headline:FC<IHeadline> = ({
    title,
    generationBalance,
    description
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {title && (
                    <div className={styles.title}>{title}</div>
                )}
                {generationBalance && (
                    <div className={styles.balance}>
                        <GenerationBalance
                            
                            />
                    </div>
                )}
            </div>
            {description && (
                <div className={styles.description}>{description}</div>
            )}
        </div>
    )
}

export default Headline;