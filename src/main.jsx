import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx';
import ContactMe from './ContactMe.jsx';
import MyWork from './MyWork.jsx';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="mywork" element={<MyWork />} />
          <Route path="contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
);
