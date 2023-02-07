import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import App from './App';
import Asd123 from './Asd123'; */
import {App, Asd123} from './Mainpage';
import {List, One} from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/asd123" element={<Asd123 />}/>
        {/* <Route path="/list" element={<List />}/> */}
        <Route path="/one" element={<One />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

