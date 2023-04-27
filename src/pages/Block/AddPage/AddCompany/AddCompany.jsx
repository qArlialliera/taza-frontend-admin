import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar } from '../../sidebar/Sidebar'
import s from './AddCompany.module.css'
import Tokenchange from '../../../../mobx/Tokenchange';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../../../services/instance';
import CompanyChange from '../../../../mobx/CompanyChange';

export const AddCompany = () => {
  let navigate = useNavigate();
  const token = Tokenchange.access_token
  const config = { headers: { 'Authorization': `Bearer ${token}` } };


  const [name, setCompanyName] = useState('')
  const [email, setCorporationEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  const add = (e) => {

    e.preventDefault();

    if (!name || !email || !phoneNumber || !address) { alert('Please, fill all boxes') }
    else {
      const company = { name, email, phoneNumber, address };
      // navigate('/add/services', { state: { name, email, phoneNumber, address, id: 1 } })
      // localStorage.setItem('lastCompanyData', id);
    instance.post('/companies/add', company, config).then((response) => {
      navigate('/add/services')
      CompanyChange.addid(response.data.id)
      localStorage.setItem('lastCompanyData', response.data.id);
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })


    }
    // console.log(company)
    // instance.post('/companies/add', company, config).then((response) => {
    //   navigate('/add/services',  {state: {name, email, phoneNumber, address, id:response.data.id}} )
    //   console.log(response.data)
    // }).catch(error => {
    //   console.log(error)
    // })
  }



  return (
    <div className="cagewall">
      <Sidebar />
      <div className="area">
        <h2>Add Company</h2>
        <p className='secondary_text'>Company Information</p>
        <div className={s.addforms}>
          <form className='container-inputs'>
            <input id="company_name" required className={s.input} type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} />
            <input id="email" className={s.input} type="email" placeholder="Corporation email" onChange={(e) => setCorporationEmail(e.target.value)} />
            <input id="phone_number" className={s.input} type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
            <input id="address" className={s.input} type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
          </form>
          <div className='row center'>
            <div className='progress-pointer progress-pointer-active'></div>
            <div className='progress-pointer'></div>
          </div>

          <div className='center'>
            <NavLink to='' className={s.buttonadd} onClick={(e) => add(e)}>Add Company</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}
