import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import AnimatedRoutes from './pages/Components/AnimatedRoutes';

function App() {

  CompanyChange.addid(localStorage.getItem('lastCompanyData'))
  document.body.style.backgroundColor = "#C2CFE4"

  // 
  
  return (
    <Router>
      <Navbar />
        <AnimatedRoutes />
    </Router>

  );
}

export default App;
