import React, { useState } from 'react'
import s from '../HomePage.module.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

export const HomeMessages = () => {
  const [isAnswerPressed, setIsAnswerPressed] = useState('')
  const messages = [
    { company_name: "Company 1", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis purus id nunc mollis, et bibendum urna congue.' },
    { company_name: "Customer Name", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { company_name: "Company 1", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis purus id nunc mollis, et bibendum urna congue.' },
  ];

  const anim = {
    initial:{ y: 10 },
    animate:{ y: 0 },
    transition:{
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }

  return (
    <div className={s.messages}>
      <h2>Messages</h2>

      {messages.map((item, index) => {
        if (index <= 1) {

          return (
            <motion.div className={s.msg_box} variants={anim} initial="initial" animate="animate" whileHover={{y: -5}}>
              <p className={s.name_of_box}>{item.company_name}</p>
              <p className={s.body_text}>{item.text}</p>
              {
                isAnswerPressed === index
                  ?
                  <div>
                    <motion.textarea className='textarea-default' variants={anim} initial="initial" animate="animate"></motion.textarea>
                    <div className='right'>
                      <button className="btn primary_btn" onClick={() => setIsAnswerPressed(null)}>Hide</button>
                    </div>
                  </div>
                  :
                  <div className='right'>
                    <button className="right btn primary_btn" onClick={() => setIsAnswerPressed(index)}>Answer</button>
                  </div>
              }
              {/* <div className='right'>
                <button className={s.primary_btn} onClick={() => setIsAnswerPressed(index)}>Answer</button>
              </div> */}
            </motion.div>

          )
        }
      })}

      <NavLink to="/" className='btn primary_btn'>More...</NavLink>
    </div>
  )
}
