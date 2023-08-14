import React from 'react';
import './Banner.scss';
import { useLocation } from 'react-router-dom';
import HomeImage from '../../assets/home_pic.jpg'; 
import AboutImage from '../../assets/about_pic.jpg'; 

export default function Banner() {
  // Get the current location using the 'useLocation' hook from 'react-router-dom
  const location = useLocation();

// Determine the banner image and title based on the current location
  const bannerImage =
    location.pathname === '/' 
      ? HomeImage 
      : location.pathname === '/about' 
      ? AboutImage 
      : null;

  const bannerTitle =
    location.pathname === '/'
      ? 'Chez vous, partout et ailleurs'
      : location.pathname === '/about'
      ? ''
      : null;

  return (
    <section className='banner'>
      <div className='banner_container'>
        {bannerImage && <img src={bannerImage} alt="Bannière" />}
      </div>
      {bannerTitle && <h1 className='banner_title'>{bannerTitle}</h1>}
    </section>
  );
}
