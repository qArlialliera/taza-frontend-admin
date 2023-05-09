import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar } from '../sidebar/Sidebar'
import s from './AddPage.module.css'

export const AddPage = () => {
  
  return (
    <div className="cagewall">
      <Sidebar />
      <div className="area">
        <h2>Add</h2>
        <div className={s.addbuttons}>

          {/* <NavLink to="/add/company" className={s.buttons}>Company</NavLink> */}
          <NavLink to="/add/category" className={s.buttons}>Category</NavLink>
          <NavLink to="/add/company" className={s.buttons}>Company</NavLink>

        </div>
      </div>

    </div>
  )
}
