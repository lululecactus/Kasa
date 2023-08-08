import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';

// Importation des composants Header et Footer depuis leurs emplacements respectifs
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
export default Layout;
