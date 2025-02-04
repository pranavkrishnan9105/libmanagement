// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service'; // Import Service
import Contact from './components/Contact';
import About from './components/About';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} /> {/* Route for Service page */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/content' element={<ContentPage />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
