// Importation de la bibliothèque React et du fichier de style Banner.scss
import React from 'react';
import './Banner.scss';

// Déclaration d'une fonction React appelée Banner qui accepte deux propriétés : bannerImage et bannerTitle
// Ces propriétés seront passées au composant pour personnaliser le contenu du bannière.
export default function Banner({ bannerImage, bannerTitle }) {
  return (
    <section className='banner'>

      <div className='banner_container'>
        {/* // Vérifie si la prop bannerImage existe, si oui, affiche une image avec la source de bannerImage  */}
        {bannerImage && <img src={bannerImage} alt="Bannière" />}
      </div>
      {bannerTitle && <h1 className='banner_title'>{bannerTitle}</h1>}
    </section>
  );
};
