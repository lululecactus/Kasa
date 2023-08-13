import React, { useState } from 'react';
import './Collapse.scss';
import ArrowUp from '../../assets/arrow_up.png';

const Collapse = ({ title, children}) => {
  // Define a state variable 'isOpen' to track the collapse state
  const [isOpen, setIsOpen] = useState(false); 

  const toggleCollapse = () => {
    setIsOpen(!isOpen);// Function to toggle the collapse state on button click
  };

  return (
    <div className='collapse'>
      {/* Render the collapse button with a conditional class 'rotate' if 'isOpen' is true */}
      <div className={`collapse_button ${isOpen ? 'rotate' : ''}`}  onClick={toggleCollapse}>
        {title} 
        <img  src={ArrowUp} alt="logo de Kasa" />
      </div>
      {/* Render the content inside a div with class 'collapse_content' if 'isOpen' is true */}
      {isOpen && <div className="collapse_content">{children}</div>}
    </div>
  );
};

export default Collapse;
