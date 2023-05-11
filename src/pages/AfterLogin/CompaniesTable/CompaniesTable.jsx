import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import s from './CompaniesTable.module.css'
import axios from 'axios'
import instance from '../../../services/instance'
import { motion } from 'framer-motion'

export const CompaniesTable = () => {
  const [data, setData] = useState('')

  useEffect(() => {

    getCategories()
  }, []);


  const getCategories = () => {
    instance.get('/companies/all').then((response) => {
      setData(response.data)
    }).catch(error => {
      console.log(error)
    });
  }



  return (
    <div className="cagewall">
      <motion.div className='sidebar'
      >
        <Sidebar />
      </motion.div>
      <motion.div className='area'
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: -750 }}
      >
        <h2>All Companies</h2>

        <div className={s.table}>
          <table className={s.tablecompany}>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Address</th>
                <th>Phone Num</th>
                <th>Rating</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(data).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>0</td>
                    <td>{item.active ? 'Active' : 'False'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>


    </div>
  )
}

// onClick={()=>DeleteCompany(item.id)}
