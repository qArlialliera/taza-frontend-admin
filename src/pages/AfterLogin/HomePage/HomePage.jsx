import React from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import s from './HomePage.module.css'
import { HomeMessages } from './HomeComponents/HomeMessages'
import { HomeControl } from './HomeComponents/HomeControl'
import { HomeStatistic } from './HomeComponents/HomeStatistic'
import { AnimatePresence, motion } from 'framer-motion'

export const HomePage = () => {
  const paragraphVariant = {
    initial:{
      y: 1000
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 20,
        ease: "easeIn",
      },
    },
    exit: {
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="cagewall">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <AnimatePresence>
        <motion.div className='area'
          key="modal"
          variants={paragraphVariant} 
          initial='initial'
          animate='visible'
          exit='exit'
        >
          <div className={s.homepagegrid}>
            <div className={s.grid_message}><HomeMessages /></div>
            <div className={s.grid_control}><HomeControl /></div>
            <div className={s.grid_statistic}><HomeStatistic /></div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
