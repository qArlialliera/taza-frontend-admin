import React, { useState, useEffect } from 'react'
import s from '../HomePage.module.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
// import { instance } from '../../../../services/instance';
import instance from '../../../../services/instance';

export const HomeMessages = () => {
  const [isAnswerPressed, setIsAnswerPressed] = useState('')
  const [specialOffers, setSpecialOffers] = useState('')


  useEffect(() => {
    getSpecialOffers()
  }, [])

const getSpecialOffers = () => {
  instance.get('/offers').then(res=>setSpecialOffers(res.data))
}


  return (
    <div className={s.messages}>
      <h2>Special Offers</h2>

      {specialOffers && specialOffers.map((item, index) => {
        if (index <= 1) {

          return (
            <div className={s.msg_box}>
              <p className={s.name_of_box}>{item.company.name}</p>
              <p className={s.body_text}>{item.offer}</p>
              
            </div>

          )
        }
      })}

    </div>
  )
}
