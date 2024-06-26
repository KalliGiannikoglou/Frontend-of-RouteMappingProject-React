import React, { useEffect, useState } from 'react';
import Main from './components/MainComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import api from './API/axiosConfig';

function App() {


  return (
    <div className = "App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
