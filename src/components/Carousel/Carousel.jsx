import React, { useState } from 'react';
import './Carousel.scss';
import ArrowLeft from '../../assets/arrow_left.png';
import ArrowRight from '../../assets/arrow_right.png';


export default function Carousel({ pictures, title }) {

  // Définition d'une variable d'état 'currentIndex' pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image précédente 
  const slidePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  // Fonction pour passer à l'image suivante 
  const slideNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1));
  };

  // Vérifie s'il n'y a qu'une seule image 
  const singlePicture = pictures.length <= 1;

  return (
    <div className='carousel'>
      {!singlePicture && (
        <>
          <img className='carousel_arrow-left' src={ArrowLeft} alt='Previous' onClick={slidePrevious} />
          <img
            className='carousel_slide'
            src={pictures[currentIndex]}
            alt={title}
          />
          <img className='carousel_arrow-right' src={ArrowRight} alt='Next' onClick={slideNext} />
          <p className='carousel_index'>{currentIndex + 1} / {pictures.length}</p>
        </>
      )}
      {singlePicture && (
        <img
          className='carousel_slide'
          src={pictures[currentIndex]}
          alt={title}
        />
      )}
    </div>
  );
}
