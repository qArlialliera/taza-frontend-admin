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
       transition: { duration: 1}
      }
}
export const Wellcome = () => {
    return (
        <div className={s.wellcome_page}>
            <motion.div className={s.row} variants={loadPage} initial="hidden" animate="visible">
                <div className={s.column}>
                    <div className='wellcome-man-image'>
                        <Wellcome_man />
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.center_align}>
                        <p className={s.w_title}>Website only for admin!</p>
                        <p className={s.w_login_t}>LOG IN!</p>
                    </div>

                </div>
                <div className={s.column}>
                    {/* <img src={wellcomeWoman} className='wellcome-woman-image'></img> */}
                    <div className='wellcome-woman-image'>
                        <Wellcome_woman />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
