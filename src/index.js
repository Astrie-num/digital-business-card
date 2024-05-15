import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './infoComponent';
import About from './aboutComponent';
import Interests from './intereststCompoment';
import Footer from './footerComponent';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Info />
    <div className='about-interests'>
    <About />
    <Interests />
    </div>
    
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
