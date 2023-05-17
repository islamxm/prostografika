import { Variant } from "framer-motion";

const pageEnterExitAnim = {
    initial: {x: "-100%"},
    animate: {x: 0},
    exit: {x: '100%'},
    transition: {ease: [0.65, 0, 0.35, 1], duration: .5}
}

export default pageEnterExitAnim;