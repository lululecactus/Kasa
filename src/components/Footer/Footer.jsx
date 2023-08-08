// Importe la bibliothèque React
import React from 'react';
// Importe le fichier CSS pour le style du Footer
import './Footer.scss';
// Importe l'image du logo en blanc depuis les ressources
import WhiteLogo from '../../assets/white_logo.png';

// Composant fonctionnel Footer
export default function Footer() {
  // Rendu du composant
  return (
    // Élément de pied de page avec une classe CSS "footer-block"
    <footer className='footer-block'>
      {/* Affiche l'image du logo en blanc avec un texte alternatif "Logo" */}
      <img src={WhiteLogo} alt="Logo" />
      {/* Paragraphe de texte indiquant l'année et les droits d'auteur */}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}