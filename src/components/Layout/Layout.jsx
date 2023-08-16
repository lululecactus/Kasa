import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout() {
  return (

    <>
      <Header />
      <main className='main-style'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Exporte la fonction Layout pour qu'elle puisse être utilisée ailleurs
export default Layout;
