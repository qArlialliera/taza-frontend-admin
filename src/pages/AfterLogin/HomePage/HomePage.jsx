import React from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import s from './HomePage.module.css'
import { HomeMessages } from './HomeComponents/HomeMessages'
import { HomeControl } from './HomeComponents/HomeControl'
import { HomeStatistic } from './HomeComponents/HomeStatistic'
import { motion } from 'framer-motion'

export const HomePage = () => {
  return (
    <div className="cagewall">

      <motion.div className='sidebar'
        //  initial={{opacity: 0, y: 10 }} 
        //  animate={{opacity: 1, y: 0}} 
        //  transition={{duration: 0.5}}
         >
        <Sidebar />
      </motion.div>

      <motion.div className='area'
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        exit={{ y: -750 }}
      >
        <div className={s.homepagegrid}>
          <div className={s.grid_message}><HomeMessages /></div>
          <div className={s.grid_control}><HomeControl /></div>
        </div>
      </motion.div>


    </div>
  )
}
