import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import i_home from '../../../images/icons/ic_round-home.svg'
import i_message from '../../../images/icons/mdi_message-outline.svg'
import i_control from '../../../images/icons/material-symbols_admin-panel-settings-outline-rounded.svg'
import i_companies from '../../../images/icons/fluent-mdl2_company-directory-mirrored.svg'
import i_add from '../../../images/icons/material-symbols_add-circle-rounded.svg'
import { motion } from "framer-motion"

import { useState } from 'react'
import { ic_home } from './icons/i_home';

export const Sidebar = () => {



  return (
    <div className={s.sideBar}>

        <ul className={s.ul}>
          <li><NavLink to='/home' className={s.links} style={({ isActive }) => ({ color: isActive ? 'white' : '#414C60' })}><img src={i_home} className={s.icon}></img> <p>Home</p></NavLink> </li>
          <li><NavLink to='/messages' className={s.links} style={({ isActive }) => ({ color: isActive ? 'white' : '#414C60' })}><img src={i_message} className={s.icon}></img><p>Messages</p></NavLink></li>
          <li><NavLink to='/admincontrol' className={s.links} style={({ isActive }) => ({ color: isActive ? 'white' : '#414C60' })}><img src={i_control}></img><p>Admin Control</p></NavLink></li>
          <li><NavLink to='/companies' className={s.links} style={({ isActive }) => ({ color: isActive ? 'white' : '#414C60' })}><img src={i_companies} className={s.icon}></img><p>All Companies</p></NavLink></li>
          {/* <li className={s.li_style}><NavLink to='/add' className={s.links}><img src={i_add}></img><p>Add</p></NavLink></li> */}
          <li><NavLink to='/add' className={s.links} style={({ isActive }) => ({ color: isActive ? 'white' : '#414C60' })}><img src={i_add}></img><p>Add</p></NavLink></li>

        </ul>

    </div>
  )
}
