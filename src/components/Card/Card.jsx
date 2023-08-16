// Importation de la bibliothèque React et de la composante Link de react-router-dom,
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

// Déclaration d'une fonction React appelée Card qui accepte trois propriétés : id, cover et title
export default function Card({ id, cover, title }) {
  return (
    <article className="card-lease">
      <Link to={`/lodging/${id}`}>

        <div className='card-lease_overlay'></div>
        <img className="card-lease_img" src={cover} alt={title} />
        <h2 className="card-lease_title">{title}</h2>
      </Link>
    </article>
  );
}
