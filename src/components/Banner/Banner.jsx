import React from 'react';
import './Banner.scss';
import { useLocation } from 'react-router-dom';
import HomeImage from '../../assets/home_pic.jpg';
import AboutImage from '../../assets/about_pic.jpg';

// Composant de la bannière
export default function Banner() {
  // Obtient l'emplacement actuel en utilisant le hook 'useLocation' de 'react-router-dom'
  const location = useLocation();

  // Détermine l'image et le titre de la bannière en fonction de l'emplacement actuel
  let bannerImage = null;
  let bannerTitle = '';

  if (location.pathname === '/') {
    bannerImage = HomeImage;
    bannerTitle = 'Chez vous, partout et ailleurs';
  } else if (location.pathname === '/about') {
    bannerImage = AboutImage;
  }

  return (
    <section className='banner'>
      <div className='banner_container'>
        {bannerImage && <img src={bannerImage} alt="Bannière" />}
      </div>
      {bannerTitle && <h1 className='banner_title'>{bannerTitle}</h1>}
    </section>
  );
}
