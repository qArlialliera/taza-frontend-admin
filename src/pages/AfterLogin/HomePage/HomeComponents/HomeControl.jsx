import React, { useState, useEffect } from 'react'
import s from '../HomePage.module.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import instance from '../../../../services/instance';

export const HomeControl = () => {
  const [isMorePressed, setIsMorePressed] = useState('')
  const [companies, setCompanies] = useState('')


  useEffect(() => {
    getCompanies()
  }, [])

  const getCompanies = () => {
    instance.get('/companies/all').then((res) => {
      setCompanies(res.data)
    }).catch(err => console.log(err))
  }

  const activateCompany = (id) => {
    console.log(id)
    instance.put(`/companies/activate/${id}`, null).then((res) => {
      getCompanies()
    }).catch(err => console.log(err))
  }

  return (
    <div className={s.messages}>
      <h2>Admin Control</h2>


      {companies ? companies.map((item, index) => {
        if (item.active === false) {
          return (
            <div className={s.msg_box} >
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

                    <div className='row center gap5'>
                      <button className="btn accept_btn" onClick={() => activateCompany(item.id)}>Accept</button>
                      <button className="btn reject_btn" onClick={() => setIsMorePressed(null)}>Reject</button>
                      <button className="btn primary_btn" onClick={() => setIsMorePressed(null)}>Hide</button>
                    </div>

                  </div>
                  :
                  <div className="row gap5">
                    <button className="btn accept_btn" onClick={() => activateCompany(item.id)}>Accept</button>
                    <button className="btn reject_btn" onClick={() => setIsMorePressed(null)}>Reject</button>
                    <button className="btn primary_btn" onClick={() => setIsMorePressed(index)}>More</button>
                  </div>}
              </div>
            </div>

          )
        }
        else {
          return (
            <div className={s.messages}>
              {/* <h3>Active companies</h3> */}
              {companies ? companies.map((item, index) => {
                if (item.active === true) {
                  return (
                    <div className={s.msg_box}>
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
                    </div>

                  )
                }
              }
              ).reverse() : null}
            </div>
          )
        }
      }
      ) : null}
      <NavLink to="/admincontrol" className='btn primary_btn'>More...</NavLink>
    </div>
  )
}
