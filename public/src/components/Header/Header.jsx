import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/logo.png';
import './Header.scss'

export default function Header() {
  return (
    <header className='header-block'>
      <Link to="/"> 
        <img  src={Logo} alt="logo de Kasa" />
      </Link>
      <nav>
        <ul className='header-block_nav'>
            <li><Link to="/">Accueil</Link></li> 
            <li><Link to="/about">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

