import React from 'react'

// import wellcomeMan from '../images/wellcomeManAn.svg'

import s from './Wellcome.module.css'
import { Wellcome_man } from './wellcomeMan'
import { motion } from "framer-motion"
import { animate } from './../../node_modules/@motionone/dom/lib/animate/index';
import { Wellcome_woman } from './Wellcome_woman'

const loadPage = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0,
        transition: { duration: 1 }
    }
}
export const Wellcome = () => {
    return (
        <div className={s.wellcome_page}>
            <motion.div className={s.row} variants={loadPage} initial="hidden" animate="visible">
                <Wellcome_man />
                <div className={s.text}>
                    <p className={s.w_title}>Website only for admin!</p>
                    <p className={s.w_bodyText}>LOG IN!</p>
                </div> 
                <Wellcome_woman />
            </motion.div>
        </div>
    )
}
