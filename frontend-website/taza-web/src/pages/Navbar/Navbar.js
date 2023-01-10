import React, { useState, useEffect } from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const token = localStorage.getItem('token');
  const [isAuth, setIsAuth] = useState(false);

  const exit = () => {
    localStorage.clear();
    setIsAuth(!token)
    alert(token)
  }
  const change = () => {
    setIsAuth(true)
  }

  useEffect(() => {
    if(token) setIsAuth(true)
  }, []);



  return (
    <div className={s.App}>
      <div class={s.navbar}>

        <div class={s.nav_header}>
          <div class={s.nav_logo}>
            <a href="/">Taza</a>
          </div>
        </div>

        {isAuth ?
          <div class={s.exit_links}><NavLink to='/' className={s.exitBtn} onClick={() => exit()}>EXIT</NavLink></div>
          :
          <div class={s.nav_links}><NavLink to='/login' className={s.loginBtn} onClick={() => change()}>SIGN UP</NavLink></div>
        }
      </div>
    </div>
  )
}


