import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className={s.App}>
      <div class={s.navbar}>

        <div class={s.nav_header}>
          <div class={s.nav_logo}>
            <a href="/">Taza</a>
          </div>
        </div>

          <div class={s.nav_links}>
            <NavLink to="#">SIGN IN</NavLink>
            <NavLink to='/login' className={s.loginBtn}>SIGN UP</NavLink>
          </div>
        
      </div>
    </div>
  )
}
