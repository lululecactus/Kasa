import React, { useState } from 'react';
import './Collapse.scss';
import ArrowUp from '../../assets/arrow_up.png';

function Collapse({ title, children }) {

  const [isOpen, setIsOpen] = useState(false); //  defini l'etat par defaut

  // Fonction pour changer l'état d'ouverture ou de fermeture au click 
  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='collapse'>
      <div className={`collapse_button ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}>
        {title}
        <img src={ArrowUp} alt="Logo de Kasa" />
      </div>
      {isOpen && <div className="collapse_content">{children}</div>}
    </div>
  );
}

export default Collapse;
