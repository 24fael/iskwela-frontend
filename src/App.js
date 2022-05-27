import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import AppNavbar from './components/AppNavbar'
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import { Container } from 'react-bootstrap';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {

 

  return (
    <React.Fragment>
      <Router>
        <AppNavbar/>
        <Container>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='courses' element={<CoursePage/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='logout' element={<Logout/>}></Route>
        </Routes>
        </Container>
      </Router>
    </React.Fragment>
  )
}

export default App;
