import React, { useEffect, useState } from 'react'

import s from '../AddPage.module.css'
import { instance } from '../../../../services/instance'
import { Button, Modal } from 'antd';
import { Sidebar } from '../../../Components/sidebar/Sidebar';

export const AddCategory = () => {
    const [categories, setCategories] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const token = localStorage.getItem('accessToken');
    const config = { headers: { 'Authorization': `Bearer ${token}` } };
    

    useEffect(() => {
        getCategories()
    }, [token])

    const getCategories = () => {
        instance.get(`/categories/all`, config).then(res => {
            setCategories(res.data)
        }).catch(err => console.log(err))
    }
    const CreateCategory = () => {
        const data = {
            name: newCategory
        }
        instance.post(`/categories/add`, data , config).then(res => {
            console.log('Success Created!')
            toggleModal()
            getCategories()
            setNewCategory('')
        }).then(err => console.log(err))
    }

    const DeleteCategory = (id) => {
        instance.delete(`/categories/${id}`, config).then(res=>{
            getCategories()
        }).catch(err=>console.log(err))
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div>
            <Sidebar />
            <div className="area">
                <h2>Add New Category</h2>

                <div className={s.newCategory}>
                    <h3>Enter category name:</h3>
                    <input placeholder='For Example: General Cleaning' onChange={(e)=>setNewCategory(e.target.value)} value={newCategory}/>
                    <button className='btn primary_btn' onClick={CreateCategory}>Save</button>
                </div>
                <Modal open={isModalOpen} onOk={toggleModal}>
                    <p className={s.modalP}> Category created!</p>
                </Modal>
                <div className={s.allCategories}>
                    <h3>All categories:</h3>
                    {
                        Array.isArray(categories)
                            ? categories.map(item => {
                                return (
                                    <div key={item.id} className={s.categoriesContainer}>
                                        <p>{item.name}</p>

                                        <button className='btn reject_btn' onClick={()=>DeleteCategory(item.id)}>Delete</button>
                                    </div>
                                )
                            }).reverse()
                            : null
                    }
                </div>

                {/* <Modal open={isModalOpen} onOk={toggleModal}>
                    <p>Are you sure?</p>
                    <button className='btn reject_btn' onClick={()=>DeleteCategory(item.id)}>Delete</button>
                </Modal> */}
            </div>
        </div>
    )
}
