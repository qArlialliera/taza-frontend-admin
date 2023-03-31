import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Sidebar } from '../../../sidebar/Sidebar'
import s from '../AddCompany.module.css'
import { useNavigate } from 'react-router-dom';
import { instance } from '../../../../../services/instance';
import Tokenchange from '../../../../../mobx/Tokenchange';
import CompanyChange from '../../../../../mobx/CompanyChange';
// import { all } from 'axios';


export const AddServices = (companydata) => {
    let navigate = useNavigate();
    const location = useLocation();
    const token = Tokenchange.access_token
    const config = { headers: { 'Authorization': `Bearer ${token}` } };

    const [allCategories, setAllCategories] = useState()
    const [activeId, setActiveId] = useState()
    const [activeName, setActiveName] = useState()
    const [price, setPrice] = useState()
    const [allservicedata, setAllServicedata] = useState()
    

    useEffect(() => {
        console.log(CompanyChange.company_id)
        instance.get('/categories/all', config).then((response) => {
            setAllCategories(response.data)

        }).catch(error => {
            console.log(error)
        })

    }, [])

    const addprice = (id, name) => {
        activeId ? setActiveId(null) : setActiveId(id)
        activeName ? setActiveName(null) : setActiveName(name)
    }
    const combineData = () => {
        const service = {
            category: {
                id: activeId,
                name: activeName
            },
            company: {
                id: CompanyChange.company_id,
            },
            price: price
        }

        instance.post('/services/add', service, config).then((response) => {
            setAllServicedata(response.data)
            console.log('resp', response.data)
        }).catch(error => {
            console.log(error)
        })

        console.log('s-', service)
        console.log(price)
    }

    return (
        <div className={s.cagewall}>
            <Sidebar />
            <div className={s.area}>
                <h2>Add Company</h2>
                <p className='secondary_text'>Select categories. Please, select one by one</p>
                <div className={s.addforms}>
                    <div className='row'>
                        <div className={s.container_buttons}>
                            {allCategories?.map((item) => {
                                return (
                                    <button
                                        className={activeId === item.id ? 'active-secondary-button' : 'secondary-button'}
                                        value={item.name}
                                        onClick={() => addprice(item.id, item.name)}
                                        key={item.id}>{item.name}</button>
                                )
                            })}

                            {
                                activeId ? <div className='marginTop20'>
                                    <p className='secondary_text'>Please add price for m2</p>
                                    <input type='number' onChange={(e) => setPrice(e.target.value)} ></input>
                                </div> :
                                    <div></div>
                            }
                        </div>
                        <div>
                            <p className='secondary_text'>Your services:</p>
                            {/* <div>{allservicedata?.category.name}</div> :   <div></div> */}
                            <div className={s.rec}>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row center marginTop20'>
                        <div className='progress-pointer' onClick={() => navigate('/add')}></div>
                        <div className='progress-pointer  progress-pointer-active'></div>
                    </div>

                    <div className='center'>
                        <NavLink to='' className={s.buttonadd} onClick={(e) => combineData(e)}>Add Company</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
