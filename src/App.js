import React from 'react';
import './App.css';
import Navbar from "./components/MainLayout/Navbar/Navbar";
import Main from './components/MainLayout/Main/Main';
import Footer from './components/MainLayout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;