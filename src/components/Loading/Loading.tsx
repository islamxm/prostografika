import styles from './Loading.module.scss';
import {motion} from 'framer-motion';
import { MoonLoader } from 'react-spinners';

const Loading = () => {


    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: [0.65, 0, 0.35, 1], duration: .5}}
            className={styles.wrapper}>
            <MoonLoader color='#fff'/>
        </motion.div>
    )
}


export default Loading;