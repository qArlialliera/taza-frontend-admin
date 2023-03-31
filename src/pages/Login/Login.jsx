import React, {useEffect} from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from './Logint.module.css'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { Login_image } from './login_image';
import { motion } from 'framer-motion';

import Tokenchange from '../../mobx/Tokenchange';

export const Login = () => {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        findUser()
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const findUser = () => {
    // e.preventDefault();
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
      <motion.div className={s.image} initial={{x:0}} animate={{x: 50, transition: { duration: 3}}} exit={{x:0}}>
        <Login_image />
      </motion.div>
      <motion.div className={s.login_forms} initial={{x:0}} animate={{x: 50, transition: { duration: 3}}} exit={{x:0}}>
        <h3 className={s.title}>Welcome to Taza!</h3>
        <p className={s.subtitle}>Login with</p>
        <div className={s.login_inputs}>
          <form>
            <input id="email" required className={s.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input id="password" className={s.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </form>
        </div>
        <div className={`${s.align_right} ${s.row}`}>
          <NavLink to='/profile' className={s.linkf} id="f">Forgot Password?</NavLink>
        </div>
        <div className={`${s.row} ${s.buttondiv}`}>
          <NavLink to='#' type="submit" className={s.button} onClick={() => findUser()}>Log In</NavLink>
        </div>


      </motion.div>
    </div>
  )
}

