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


function App() {



  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' exact element={<Wellcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/companies' element={<CompaniesTable/>} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/add/company' element={<AddCompany/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
