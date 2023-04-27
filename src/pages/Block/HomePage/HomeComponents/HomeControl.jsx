import React, { useState } from 'react'
import s from '../HomePage.module.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

export const HomeControl = () => {
  const [isMorePressed, setIsMorePressed] = useState('')
  const company = [
    { company_name: "Company 1", address: 'address1', phoneNumber: '87018886666', categories: [{ id: '1', name: 'General Cleaning' }, { id: 2, name: 'Wet Cleaning' }], additional: 'Уборка дома начинается от 15000тг' },
    { company_name: "Company 2", address: 'address1', phoneNumber: '87018886666', categories: [{ id: '1', name: 'bhjvdnk' }, { id: 2, name: 'uievnjk' }], additional: 'n vjkrefndosklm,s;;' },
    { company_name: "Company 3", address: 'address1', phoneNumber: '87018886666', categories: [{ id: '1', name: 'bhjvdnk' }, { id: 2, name: 'uievnjk' }], additional: 'n vjkrefndosklm,s;;' },
  ];
  const anim = {
    initial: { y: 10 },
    animate: { y: 0 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
  return (
    <div className={s.messages}>
      <h2>Admin Control</h2>
      {company.map((item, index) => {
        if (index <= 1) {
          return (
            <motion.div className={s.msg_box} variants={anim} initial="initial" animate="animate" whileHover={{ y: -5 }}>
              <div className='center column'>
                <p className={s.sec_title_text}>{item.company_name} want to join</p>
                {isMorePressed === index ?
                  <div className={s.alllistarea}>
                    <tr>
                      <th className={s.row_name}><b>Name:</b></th>
                      <td className={s.row_info}>{item.company_name}</td>
                    </tr>
                    <tr>
                      <th className={s.row_name}><b>Address:</b></th>
                      <td className={s.row_info}>{item.address}</td>
                    </tr>
                    <tr>
                      <th className={s.row_name}><b>Phone Number:</b></th>
                      <td className={s.row_info}>{item.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th className={s.row_name}><b>Categories:</b></th>
                      <td>
                      {
                        item.categories.map((cat) => {
                          return (
                            <p className={s.row_info}>{cat.name}</p>
                          )

                        })
                      }
                      </td>
                    </tr>
                    <tr>
                      <th className={s.row_name}><b>Additional:</b></th>
                      <td className={s.row_info}>{item.additional}</td>
                    </tr>
                    <div className='right'>
                      <button className="btn primary_btn" onClick={() => setIsMorePressed(null)}>Hide</button>
                    </div>

                  </div>
                  :
                  <div className="row">
                    <button className="btn accept_btn" onClick={() => setIsMorePressed(null)}>Accept</button>
                    <button className="btn reject_btn" onClick={() => setIsMorePressed(null)}>Reject</button>
                    <button className="btn primary_btn" onClick={() => setIsMorePressed(index)}>More</button>
                  </div>}
              </div>
            </motion.div>

          )
        }
      })}
      <NavLink to="/admincontrol" className='btn primary_btn'>More...</NavLink>
    </div>
  )
}
