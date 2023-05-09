import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import s from './CompaniesTable.module.css'
import axios from 'axios'
import { instance } from '../../../services/instance'


export const CompaniesTable = () => {
  const [data, setData] = useState('')

  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };



  useEffect(() => {

    getCategories()
  }, [token]);


const getCategories = () => {
  instance.get('/companies/all', config).then((response) => {
    setData(response.data)
  }).catch(error => {
    console.log(error)
  });
}



  return (
    <div className="cagewall">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='area'>
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
      </div>


    </div>
  )
}

// onClick={()=>DeleteCompany(item.id)}
