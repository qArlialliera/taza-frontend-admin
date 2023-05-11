import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Wellcome } from '../BeforeLogin/Wellcome/Wellcome'
import { Login } from '../BeforeLogin/Login/Login'
import { HomePage } from '../AfterLogin/HomePage/HomePage'
import { Messages } from '../AfterLogin/Messages/Messages'
import { Chats } from '../AfterLogin/Messages/Chats'
import { CompaniesTable } from '../AfterLogin/CompaniesTable/CompaniesTable'
import { AdminPanel } from '../AfterLogin/AdminPanel/AdminPanel'
import { AddPage } from '../AfterLogin/AddPage/AddPage'
import { AddCategory } from '../AfterLogin/AddPage/WhatAdd/AddCategory'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Wellcome />} />
                <Route path='/login' element={<Login />} />

                <Route path='/home' element={<HomePage />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/messages/сhat' element={<Chats />} />
                <Route path='/companies' element={<CompaniesTable />} />
                <Route path='/admincontrol' element={<AdminPanel />} />
                <Route path='/add' element={<AddPage />} />
                <Route path='/add/category' element={<AddCategory />} />
                {/* <Route path='/chat/' element={<AddCategory/>} /> */}

            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes