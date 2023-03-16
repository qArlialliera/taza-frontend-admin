import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar } from '../sidebar/Sidebar'
import s from './AddPage.module.css'

export const AddPage = () => {
  
  return (
    <div className={s.cagewall}>
      <Sidebar />
      <div className={s.area}>
        <h2>Add</h2>
        <div className={s.addbuttons}>

          <NavLink to="/add/company" className={s.buttons}>Company</NavLink>

        </div>
      </div>

    </div>
  )
}
