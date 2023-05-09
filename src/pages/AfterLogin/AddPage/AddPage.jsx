import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './AddPage.module.css'
import { Sidebar } from '../../Components/sidebar/Sidebar'

export const AddPage = () => {
  
  return (
    <div className="cagewall">
      <Sidebar />
      <div className="area">
        <h2>Add</h2>
        <div className={s.addbuttons}>
          <NavLink to="/add/category" className={s.buttons}>Category</NavLink>
          <NavLink to="/add/admin" className={s.buttons}>Admin</NavLink>

        </div>
      </div>

    </div>
  )
}
