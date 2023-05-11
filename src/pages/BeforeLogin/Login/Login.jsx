import React, { useEffect } from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from './Logint.module.css'
import UserService from '../../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { Login_image } from './login_image';
import { motion } from 'framer-motion';

import Tokenchange from '../../../mobx/Tokenchange';

export const Login = () => {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const keyPress = (event) => {
    if (event.key === 'Enter') {
      findUser()
    }
  };

  const findUser = () => {
    const user = { username, password };
    UserService.loginUser(user).then((response) => {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      navigate('/home')
      Tokenchange.addtoken(response.data.accessToken, response.data.refreshToken)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className={s.logn_page}>
      <motion.div className={s.background}
        initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}
      >


      <motion.div className={s.row}
        initial={{ x: 100 }} animate={{ x: 10 }} transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className={s.image} >
          <Login_image />
        </div>
        <div className={s.login_forms}>
          <h3>Welcome to Taza!</h3>
          <p>Login with</p>
          <div className={s.login_inputs}>
            <form >
              <input id="email" required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                onKeyPress={keyPress} />
              <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                onKeyPress={keyPress} />
            </form>
          </div>

          <NavLink to='#' type="submit" className='primary_btn btn' onClick={() => findUser()}>Log In</NavLink>


        </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

