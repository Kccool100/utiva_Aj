import React from 'react';
import './App.css';
import {BrowseRouter, Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home/Home';
import School from './pages/Schools/School'
import GlobalButton from './component/GlobalButton';
import Header from './component/Header';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <GlobalButton/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/school' element={<School/>}/>
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
