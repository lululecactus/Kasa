import React, { useState } from 'react';
import './Collapse.scss';
import ArrowUp from '../../assets/arrow_up.png';

const Collapse = ({ title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      
      <div className={`collapse_button ${isOpen ? 'rotate' : ''}`}  onClick={toggleCollapse}>
        {title} 
        <img  src={ArrowUp} alt="logo de Kasa" />
      </div>
      {isOpen && <div className="collapse_content">{children}</div>}
    </div>
  );
};

export default Collapse;
