import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar } from '../../sidebar/Sidebar'
import s from './AddCompany.module.css'
import { useState } from "react";
import { Categories } from './Checkbox/Categories';
import UserService from '../../../../services/UserService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddCompany = () => {
  const [name, setCompanyName] = useState('')
  const [email, setCorporationEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  let navigate = useNavigate();
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  const add = (e) => {
    e.preventDefault();
    const company = { name, email, phoneNumber, address };

    axios.post('http://localhost:8080/api/v1/companies/add', company, config).then((response) => {
      alert('Done!')
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }



  return (
    <div className={s.cagewall}>
      <Sidebar />
      <div className={s.area}>
        <h2>Add Company</h2>
        <div className={s.addforms}>
          <form>
            <input id="company_name" required className={s.input} type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} />
            <input id="email" className={s.input} type="email" placeholder="Corporation email" onChange={(e) => setCorporationEmail(e.target.value)} />
            <input id="phone_number" className={s.input} type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
            <input id="address" className={s.input} type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
          </form>
          <div className={s.checkboxes}>
            <h3 className={s.extratitle}>Categories</h3>
            <div className={s.checkboxes_categories}>
              <div className={s.column}>
                <input type="checkbox" className={s.custom_checkbox}
                  id="wetcleaning"
                  name="wetcleaning"
                  value="yes"
                />
                <label for="wetcleaning" className={s.inputtext}>Влажная уборка</label>

                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="repcleaning"
                  name="repcleaning"
                  value="yes"
                />
                <label for="repcleaning" className={s.inputtext}>Уборка после ремонта</label>

              </div>
              <div className={s.column}>
                <input type="checkbox" className={s.custom_checkbox}
                  id="gencleaning"
                  name="gencleaning"
                  value="yes"
                />
                <label for="gencleaning" className={s.inputtext}>Генеральная уборка</label>


                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="offcleaning"
                  name="offcleaning"
                  value="yes"
                />
                <label for="offcleaning" className={s.inputtext}>Уборка в офисе</label>
              </div>
            </div></div>
          <div className={s.checkboxes}>
            <h3 className={s.extratitle}>Дополнительные функции</h3>
            <div className={s.checkboxes_categories}>
              <div className={s.column}>
                <input type="checkbox" className={s.custom_checkbox}
                  id="laundry"
                  name="laundry"
                  value="yes"
                />
                <label for="laundry" className={s.inputtext}>Прачечная</label>

                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="iron"
                  name="iron"
                  value="yes"
                />
                <label for="iron" className={s.inputtext}>Глажка белья</label>

                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="sofa"
                  name="sofa"
                  value="yes"
                />
                <label for="sofa" className={s.inputtext}>Мойка диванов</label>

              </div>
              <div className={s.column}>
                <input type="checkbox" className={s.custom_checkbox}
                  id="dishes"
                  name="dishes"
                  value="yes"
                />
                <label for="dishes" className={s.inputtext}>Помыть посуду</label>


                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="window"
                  name="window"
                  value="yes"
                />
                <label for="window" className={s.inputtext}>Мойка окон</label>

                <input type="checkbox"
                  className={s.custom_checkbox}
                  id="balcony"
                  name="balcony"
                  value="yes"
                />
                <label for="balcony" className={s.inputtext}>Мойка балкона</label>
              </div>
            </div>
          </div>

          <NavLink to='' className={s.buttonadd} onClick={(e) => add(e)}>Add Company</NavLink>
        </div>
      </div>

    </div>
  )
}
