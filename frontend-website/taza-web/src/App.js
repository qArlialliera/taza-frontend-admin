import logo from './logo.svg';
import './App.css';
import { Wellcome } from './Wellcome/Wellcome';
import { Navbar } from './pages/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes >
        <Route path='/' exact element={<Wellcome />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </Router>
    
  );
}

export default App;
