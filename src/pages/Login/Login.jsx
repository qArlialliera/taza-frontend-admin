import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from './Logint.module.css'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { Login_image } from './login_image';
import { motion } from 'framer-motion';

export const Login = () => {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();


  const findUser = (e) => {
    e.preventDefault();
    const user = { username, password };
    UserService.loginUser(user).then((response) => {
      console.log(response.data)
      localStorage.setItem('token', response.data);
      navigate('/home')
      console.log(localStorage.getItem('token'))

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
          <NavLink to='#' type="submit" className={s.button} onClick={(e) => findUser(e)}>Log In</NavLink>
        </div>


      </motion.div>
    </div>
  )
}

