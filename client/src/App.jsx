import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage from './pages/Home';
import  AboutPage from './pages/About';
import  LoginPage from './pages/Login';
import  RegisterPage from './pages/Register';
import  ContactPage from './pages/Contact';
import  ServicePage from './pages/Service';
import  Logoutpage from './pages/Logoutpage';
import  ErrorPage from './pages/ErrorPage';
import  NavbarComponents from './components/NavbarComponents'
import FooterComponents from './components/FooterComponents';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarComponents/>
   
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={AboutPage} />
      <Route path='/service' Component={ServicePage} />
      <Route path='/contact' Component={ContactPage} />
      <Route path='/login' Component={LoginPage} />
      <Route path='/register' Component={RegisterPage} />
      <Route path='/logout' Component={Logoutpage} />
      <Route path='*' Component={ErrorPage} />
    </Routes>
    <FooterComponents/>
    </BrowserRouter>
    </>
  )
}

export default App
