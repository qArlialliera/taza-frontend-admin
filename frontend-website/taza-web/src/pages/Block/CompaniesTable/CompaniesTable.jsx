import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import s from './CompaniesTable.module.css'
import axios from 'axios'


export const CompaniesTable = () => {

  const [data, setData] = useState('')
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/companies/all', config).then((response) => {
      console.log(response.data)
      setData(response.data);
    }).catch(error => {
      console.log(error)
    });
  }, []);


  return (
    <div className={s.cagewall}>
      <Sidebar />
      <div className={s.homepagegrid}>
        <h2>All Companies</h2>
        <div className={s.table}>
          <table className={s.tablecompany}>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Address</th>
                <th>Phone Num</th>
                <th>Rating</th>
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
                    <td />
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
