import React from 'react'
import s from './Wellcome.module.css'
import { Wellcome_man } from './wellcomeMan'
import { motion } from "framer-motion"
import { Wellcome_woman } from './Wellcome_woman'

export const Wellcome = () => {
    return (
        <motion.div className={s.wellcome_page}
            initial={{ x: 150 }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.75, ease: 'easeOut' }}
            // exit={{x:-50}}
            >
            <motion.div className={s.row}
                initial={{ x: 100 }} animate={{ x: 10 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
                <Wellcome_man />
                <div className={s.text}>
                    <p className={s.w_title}>Website only for admin!</p>
                    <p className={s.w_bodyText}>LOG IN!</p>
                </div>
                <Wellcome_woman />
            </motion.div>
        </motion.div>
    )
}
