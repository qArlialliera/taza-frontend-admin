import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './AddPage.module.css'
import { Sidebar } from '../../Components/sidebar/Sidebar'
import { motion } from 'framer-motion'
export const AddPage = () => {

  return (
    <div className="cagewall">
      <motion.div className='sidebar'>
        <Sidebar />
      </motion.div>
      <motion.div className='area'
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: -750 }}
      >
        <h2>Add</h2>
        <div className={s.addbuttons}>
          <NavLink to="/add/category" className={s.buttons}>Category</NavLink>
          {/* <NavLink to="/add/admin" className={s.buttons}>Admin</NavLink> */}

        </div>
      </motion.div>

    </div>
  )
}
