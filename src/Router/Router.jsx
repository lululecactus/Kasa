import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home'; // Adjust the import path for the Home component
import Lodging from '../pages/Lodging/Lodging'; // Adjust the import path for the Lodging component
import About from '../pages/About/About'; // Adjust the import path for the About component
import Error from '../pages/Error/Error'; // Adjust the import path for the Error component
import Layout from '../components/Layout/Layout';

function Router() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lodging" element={<Lodging />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    
  );
}

export default Router;