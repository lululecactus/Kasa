import React from 'react';
import { Link } from 'react-router-dom';
import'./Card.scss'

export default function Card({ id, cover, title }) {
    return (
      <article className="card-lease">
        {/* Create a link that navigates to the 'Lodging' page with the corresponding 'id' */}
      <Link to={`/lodging/${id}`}>
        <div className='card-lease_overlay'></div>
          <img className="card-lease_img" src={cover} alt={title} />
          <h2 className="card-lease_title">{title}</h2>
      </Link>  
      </article>
      
    );
  }
  