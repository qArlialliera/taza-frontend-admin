import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Wellcome } from './Wellcome/Wellcome';
import { Navbar } from './pages/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { HomePage } from './pages/Block/HomePage/HomePage';
import { CompaniesTable } from './pages/Block/CompaniesTable/CompaniesTable';
import { AddPage } from './pages/Block/AddPage/AddPage';
import { AddCompany } from './pages/Block/AddPage/AddCompany/AddCompany';
import { AddServices } from './pages/Block/AddPage/AddCompany/AddServices/AddServices';
import CompanyChange from './mobx/CompanyChange';
import { AdminPanel } from './pages/Block/AdminPanel/AdminPanel';
import { Messages } from './pages/Block/Messages/Messages';

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
        <Route path='//messages' element={<Messages />} />
        <Route path='/companies' element={<CompaniesTable/>} />
        <Route path='/admincontrol' element={<AdminPanel/>} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/add/company' element={<AddCompany/>} />
        <Route path='/add/services' element={<AddServices/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
