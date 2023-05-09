import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/AfterLogin/HomePage/HomePage';
import { CompaniesTable } from './pages/AfterLogin/CompaniesTable/CompaniesTable';
import { AddPage } from './pages/AfterLogin/AddPage/AddPage';
import CompanyChange from './mobx/CompanyChange';
import { AdminPanel } from './pages/AfterLogin/AdminPanel/AdminPanel';
import { Messages } from './pages/AfterLogin/Messages/Messages';
import { Chats } from './pages/AfterLogin/Messages/Chats';
import { AddCategory } from './pages/AfterLogin/AddPage/WhatAdd/AddCategory';
import { Navbar } from './pages/Components/Navbar/Navbar';
import { Login } from './pages/BeforeLogin/Login/Login';
import { Wellcome } from './pages/BeforeLogin/Wellcome/Wellcome';

function App() {

  CompanyChange.addid(localStorage.getItem('lastCompanyData'))
  document.body.style.backgroundColor = "#C2CFE4"
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Wellcome />} />
        <Route path='/login' element={<Login />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/messages/сhat' element={<Chats />} />
        <Route path='/companies' element={<CompaniesTable/>} />
        <Route path='/admincontrol' element={<AdminPanel/>} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/add/category' element={<AddCategory/>} />
        {/* <Route path='/chat/' element={<AddCategory/>} /> */}

      </Routes>
    </Router>
    
  );
}

export default App;
