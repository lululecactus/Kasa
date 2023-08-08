import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Lodging from '../pages/Lodging/Lodging'; 
import About from '../pages/About/About'; 
import Error from '../pages/Error/Error'; 
import Layout from '../components/Layout/Layout';

function Router() {
  return (
    // Use the BrowserRouter component to define routing
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lodging/:id"element={<Lodging />} />
          <Route path="about" element={<About />} />
          {/* Route for all other unknown pages, displaying the Error component */}
          <Route path="*" element={<Error />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    
  );
}

export default Router;