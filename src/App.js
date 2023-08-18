import React from 'react';
import './App.css';
import MainCont from './components/MainLayout/MainCont/MainCont';
import About from './components/pages/About';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Menu from './components/pages/Menu';
import OrderOnline from './components/pages/OrderOnline';
import Reservation from './components/pages/Reservation';
import Confirmation from './components/SubComponents/Confirmation/Confirmation'
import {Routes, Route,} from "react-router-dom"


function App() {
  return (
    <>
      <MainCont>
        <Routes>
          <Route>
          <Route path="/confirmation" element={<Confirmation/>} />
          <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservation" element={<Reservation/>} />
                <Route path="/orderonline" element={<OrderOnline/>} />
                <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </MainCont>
    </>
  );
}

export default App;