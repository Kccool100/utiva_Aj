import React from 'react';
import './App.css';
import {BrowseRouter, Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home/Home';
import School from './pages/Schools/School'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/school' element={<School/>}/>
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
