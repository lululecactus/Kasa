
import React from 'react';
import './index.scss';
import { createRoot } from 'react-dom/client'; 
import App from './App';

// Create a root node using the createRoot function and render the App component inside it

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


