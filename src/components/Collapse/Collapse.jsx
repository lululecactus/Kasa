import React, { useState } from 'react';
import './Collapse.scss';
import ArrowUp from '../../assets/arrow_up.png';

// Déclaration d'une composante Collapse sous forme de fonction fléchée avec 2 propriétés : title et children
const Collapse = ({ title, children }) => {
  // Définition d'une variable d'état 'isOpen' pour suivre l'état du collapsible (ouvert/fermé)
  const [isOpen, setIsOpen] = useState(false);

// Fonction pour changer l'état du collapsible lors du clic 
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <div className={`collapse_name ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}>
        {title}
        <img src={ArrowUp} alt={ArrowUp} />
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : 'close'}`}>{children}</div>
    </div>
  );
};

export default Collapse;
