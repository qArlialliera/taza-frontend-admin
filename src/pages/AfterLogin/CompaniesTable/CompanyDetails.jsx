import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import s from './CompaniesTable.module.css'
import m from '../AddPage/AddPage.module.css'
import instance from '../../../services/instance'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import { Button, Modal } from 'antd';

import '@smastrom/react-rating/style.css'
import Repeater from '../../../mobx/Repeater';
import { observer } from 'mobx-react-lite';

export const CompanyDetails = observer((props) => {
    const location = useLocation();
    console.log('gd', location.state.item)

    const [imageData, setImageData] = useState(null);
    const [rating, setRating] = useState();
    const [services, setServices] = useState();
    const [modal2Open, setModal2Open] = useState(false);

    const [isActive, setActive] = useState(location.state.item.active)
    useEffect(() => {
        axios.get(`http://localhost:8080/public/file/photo/get/${location.state.item.photo}`, { responseType: 'blob' }).then((response) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageData(reader.result);
            };
            reader.readAsDataURL(response.data);
            console.log('hey')
        }).catch(err => console.error(err))

        getRating()
        getServices()
    }, [Repeater.bool])

    const getRating = () => {
        instance(`/review/rating/${location.state.item.id}`).then(res => {
            setRating(res.data)
            console.log(res.data)
        }).catch(err => { console.log(err) })
    }
    const getServices = () => {
        instance.get(`/services/company/${location.state.item.id}`).then(res=>{
            setServices(res.data)
            console.log(res.data)
        }).catch(err => { console.log(err) })
    }

    const myStyles = {
        itemShapes: ThinRoundedStar,
        activeFillColor: '#414C60',
        activeStrokeColor: '#414C60',
        inactiveFillColor: '#989898',
        inactiveStrokeColor: '#414C60'
    }

    const ChangeStatusAccount = (status) => {
        console.log('id = ', location.state.item.id, 'status = ', status)
        const data = {
            id: location.state.item.id,
            active: status
        }
        instance.put(`/companies/${location.state.item.id}`, data).then(res => {
            Repeater.trigger()
            setActive(status)
            setModal2Open(true)
        }).catch(err => console.log(err))
    }
    return (
        <div className="cagewall">
            <motion.div className='sidebar'>
                <Sidebar />
            </motion.div>
            <motion.div className='area'
                initial={{ x: 750 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ x: 750 }}>
                <Modal
                    title="Status Chaged"
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                >
                    <p>Status of company was changed!</p>
                </Modal>
                <h2>Company Detail</h2>

                <div className={s.profileContainer}>
                    <div className={s.header}>
                        <img src={imageData}></img>
                        <div className={s.headerinfo}>
                            <div>
                                <h6>{location.state.item.name}</h6>
                                <p>{location.state.item.user.fullName}</p>
                            </div>
                            <div className={s.starscont}>
                                <Rating
                                    value={rating}
                                    onChange={setRating}
                                    readOnly={true}
                                    itemStyles={myStyles} />
                            </div>
                        </div>
                    </div>
                    <div className={s.body}>
                        <div className={s.leftSide}>
                            {
                                isActive
                                    ? <button className='btn green_btn'>Active</button>
                                    : <button className='btn gray_btn'>Inactive</button>
                            }
                            <div className={s.mainInfo}>
                                <p>Astana</p>
                                <p>{location.state.item.address}</p>
                                <p>{location.state.item.email}</p>
                                <p>{location.state.item.phoneNumber}</p>
                            </div>
                            {
                                !isActive
                                    ? <button className='btn primary_btn' onClick={() => ChangeStatusAccount(true)}>Activate account</button>
                                    : <button className='btn primary_btn' onClick={() => ChangeStatusAccount(false)}>Inactivate account</button>
                            }
                        </div>
                        <div className={s.rightSide}>
                            <h6>Company services</h6>
                            {
                                services && services.map((item)=> {
                                    return (
                                        <div key={item.id} className={m.categoriesContainer}>
                                            <p>{item.categories[0].name}</p>
    
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
})
