import { FC } from "react"
import styles from './StartPage.module.scss';
import Button from "../../components/Button/Button";
import {Row, Col} from 'antd';
// import card1 from '../../../public/assets/img/start-page-card-1.png';
// import card2 from '../../../public/assets/img/start-page-card-2.png';
import {motion, Variants} from 'framer-motion';


const itemAnim:Variants  = {
    hidden: {
        y: 1, 
        //rotate: 20
    },
    visible: {
        y: 0,
        // rotate: 0,
        transition: {
            //cubic-bezier(.26,.12,.25,.99)
            ease: [.26,.12,.25,.99],
            duration: 1,
            // type: 'tween'
        }
    }
}

const StartPage:FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h2 className={styles.title}>
                    Prosto<br/>
                    grafika
                </h2>
            </div>
            <div className={styles.main}>
                <motion.div 
                    variants={{
                        hidden: {opacity: 0},
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: .5,
                                staggerChildren: .5,
                            }
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    className={styles.cards}>
                    <div className={styles.card}>
                        <motion.div 
                            variants={itemAnim} 
                            className={styles.card_in}></motion.div>
                    </div>
                    <div className={styles.card}>
                        <motion.div 
                            variants={itemAnim} 
                            className={styles.card_in}></motion.div>
                    </div>
                    <div className={styles.card}>
                        <motion.div 
                            variants={itemAnim} 
                            className={styles.card_in}></motion.div>
                    </div>
                </motion.div>
                <h1 className={styles.title}>Создай карточку <br/> товара за <span>5 минут</span></h1>
                <Button 
                    fill
                    text="Создать"/>
            </div>
            <div className={styles.ex}>
                <div className={styles.label}>Жми и смотри <br/> обзор сервиса</div>
                <a className={styles.link} href="/" target="_blank" ></a>
            </div>
        </div>
    )
}


export default StartPage;