import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import s from './CompaniesTable.module.css'
import axios from 'axios'
import UserService from '../../../services/UserService'
import Tokenchange from '../../../mobx/Tokenchange'
import { instance } from '../../../services/instance'
import { Modal } from 'antd'

export const CompaniesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState('')
  const [currentId, setCurrentId] = useState('')
  const token = Tokenchange.access_token
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  useEffect(() => {
    instance.get('/companies/all', config).then((response) => {
      setData(response.data)
    }).catch(error => {
      console.log(error)
    });
  }, [data]);

  const DeleteCompany = () => {
    instance.delete(`companies/${currentId}`, config).then((response) => {
      console.log('success deleted -', currentId)
    }).catch(error => {
      console.log(error)
    })
  }
  const openModal = (id) => {
    setCurrentId(id)
    setIsModalOpen(true);
  };
  const closeModal = (id) => {setIsModalOpen(false);};
  



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
                <th>Buttons</th>
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
                    <td>
                      <button className='secondary-little-button' onClick={()=>openModal(item.id)}>Delete</button>
                      <button className='secondary-little-button'>Edit</button>
                    </td>
                    <td />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={isModalOpen}
        onOk={() => DeleteCompany()}
        onCancel={closeModal}
        okText="Delete"
        className={s.modal_container}
      >
        <p className='modal-primary-text'>Are you sure?</p>
      </Modal>

    </div>
  )
}

// onClick={()=>DeleteCompany(item.id)}
