import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './index.css';
import App from './App';
import GetTheApp from './pages/GetTheApp/GetTheApp';
import AddRestaurant from './pages/Add-Restaurant/AddRestaurant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App/>}/>
      <Route path='/getTheApp' element={<GetTheApp />}/>
      <Route path='/addRestaurant' element={<AddRestaurant />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();s