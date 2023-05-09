import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from '../HomePage/HomePage.module.css'
import { instance } from '../../../services/instance';

export const AdminPanel = () => {
  const [isMorePressed, setIsMorePressed] = useState('')
  const [companies, setCompanies] = useState('')
  const anim = {
    // initial: { y: 10 },
    // animate: { y: 0 },
    // transition: {
    //   type: "spring",
    //   stiffness: 260,
    //   damping: 20
    // }
  }
  const token = localStorage.getItem('accessToken');
  const config = { headers: { 'Authorization': `Bearer ${token}` } };

  useEffect(() => {
    getCompanies()
  }, [])

  const getCompanies = () => {
    instance.get('/companies/all', config).then((res) => {
      setCompanies(res.data)
    }).catch(err => console.log(err))
  }

  const activateCompany = (id) => {
    console.log(id)
    instance.put(`/companies/activate/${id}`, null, config).then((res) => {
      getCompanies()
    }).catch(err => console.log(err))
  }
  return (
    <div className="cagewall">
      <Sidebar />
      <div className="area">
        <div className={s.messages}>
          <h2>Admin Control</h2>
          <h3>Not active companies</h3>
          {companies ? companies.map((item, index) => {
            if (item.active === false) {
              return (
                <motion.div className={s.msg_box} variants={anim} initial="initial" animate="animate" whileHover={{ y: -5 }}>
                  <div className='center column'>
                    <p className={s.sec_title_text}>{item.name} want to join</p>
                    {isMorePressed === index ?
                      <div className={s.alllistareaFull}>
                        <tr>
                          <th className={s.row_nameFull}><b>Name:</b></th>
                          <td className={s.row_info}>{item.name}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Address:</b></th>
                          <td className={s.row_info}>{item.address}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Phone Number:</b></th>
                          <td className={s.row_info}>{item.phoneNumber}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Representative Name:</b></th>
                          <td className={s.row_info}>{item.user.fullName ? item.user.fullName : 'none'}</td>
                        </tr>

                        <div className='row center'>
                          <button className="btn accept_btn" onClick={() => activateCompany(item.id)}>Accept</button>
                          <button className="btn reject_btn" onClick={() => setIsMorePressed(null)}>Reject</button>
                          <button className="btn primary_btn" onClick={() => setIsMorePressed(null)}>Hide</button>
                        </div>

                      </div>
                      :
                      <div className="row">
                        <button className="btn accept_btn" onClick={() => activateCompany(item.id)}>Accept</button>
                        <button className="btn reject_btn" onClick={() => setIsMorePressed(null)}>Reject</button>
                        <button className="btn primary_btn" onClick={() => setIsMorePressed(index)}>More</button>
                      </div>}
                  </div>
                </motion.div>

              )
            }
          }
          ) : null}

          <h3>Active companies</h3>
          {companies ? companies.map((item, index) => {
            if (item.active === true) {
              return (
                <motion.div className={s.msg_box} variants={anim} initial="initial" animate="animate" whileHover={{ y: -5 }}>
                  <div className='center column'>
                    <p className={s.sec_title_text}>{item.name}</p>
                    {isMorePressed === index ?
                      <div className={s.alllistareaFull}>
                        <tr>
                          <th className={s.row_nameFull}><b>Name:</b></th>
                          <td className={s.row_info}>{item.name}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Address:</b></th>
                          <td className={s.row_info}>{item.address}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Phone Number:</b></th>
                          <td className={s.row_info}>{item.phoneNumber}</td>
                        </tr>
                        <tr>
                          <th className={s.row_nameFull}><b>Representative Name:</b></th>
                          <td className={s.row_info}>{item.user.fullName ? item.user.fullName : 'none'}</td>
                        </tr>

                        <div className='row center'>
                          <button className="btn primary_btn" onClick={() => setIsMorePressed(null)}>Hide</button>
                        </div>

                      </div>
                      :
                      <div className="row center">
                        <button className="btn primary_btn" onClick={() => setIsMorePressed(index)}>More</button>
                      </div>}
                  </div>
                </motion.div>

              )
            }
          }
          ).reverse() : null}

        </div>
      </div>

    </div>
  )
}
