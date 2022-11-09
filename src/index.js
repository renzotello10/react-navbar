import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header'
import Service from './components/Service'
import About from './components/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes >
        <Route exact path="/" element={<App/>} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
   
  </React.StrictMode>
);

