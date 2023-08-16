import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Lodging from '../pages/Lodging/Lodging';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';
import Layout from '../components/Layout/Layout';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Exporte la fonction Router pour qu'elle puisse être utilisée ailleurs
export default Router;
