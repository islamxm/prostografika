import styles from './GenerationCount.module.scss';



const GenerationCount = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.value}>
                160<span>/160</span>
            </div>
            <div className={styles.label}>Количество генераций</div>
        </div>
    )
}

export default GenerationCount;