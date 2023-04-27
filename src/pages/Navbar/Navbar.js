import React, { useState, useEffect } from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Tokenchange from '../../mobx/Tokenchange'
import { observer } from 'mobx-react-lite'
import UserService from '../../services/UserService'

import axios from 'axios'

export const Navbar = observer (() => {
  const [photo, setPhoto] = useState()
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  Tokenchange.addtoken(accessToken, refreshToken)
  // const token = Tokenchange.access_token
  // const config = {
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  // };

  const exit =  () => {
    Tokenchange.deletetoken()
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("accessToken")
  }



  return (
    <div className={s.App}>
      <div class={s.navbar}>

        <div class={s.nav_header}>
          <div class={s.nav_logo}>
            <a href="/">Taza</a>
          </div>
        </div>

        {refreshToken ?
          <div class={s.exit_links}>
            
            <NavLink to='/' className={s.exitBtn} onClick={() => exit()}>EXIT</NavLink>
            </div>
          :
          <div class={s.nav_links}><NavLink to='/login' className={s.loginBtn}>SIGN UP</NavLink></div>
        }
      </div>
    </div>
  )
}
)

