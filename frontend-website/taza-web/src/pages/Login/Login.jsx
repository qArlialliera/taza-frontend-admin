import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from './Logint.module.css'
import UserService from '../../services/UserService';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  

  const findUser = (e) => {
    e.preventDefault();
    console.log("email:", email, "; password: ", password);
    const user = {email, password};

    UserService.loginUser(user).then((response) => {
      console.log(response.data)
      
  }).catch(error => {
       console.log(error)
  })
  }

  return (
    <div className={s.logn_page}>
      <div className={s.login_forms}>
        <h3 className={s.title}>Welcome to Taza!</h3>
        <p className={s.subtitle}>Login with</p>
        <div className={s.login_inputs}>
          <form>
            <input id="email" required className={s.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input id="password" className={s.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </form>

        </div>
        <NavLink to='#' type="submit" className={s.button} onClick={(e) => findUser(e)}>Log In</NavLink>

      </div>
    </div>
  )
}

