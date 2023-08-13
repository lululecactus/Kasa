// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main className='main-style'>
        <Outlet /> {/* Renders the child routes */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
