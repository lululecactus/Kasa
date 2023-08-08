import './About.scss'; // Import du fichier de styles spécifiques à la page About
import React from 'react'; // Import de la bibliothèque React
import Banner from '../../components/Banner/Banner'; // Import du composant de bannière
import Collapse from '../../components/Collapse/Collapse'; // Import du composant d'expansion

export default function About() {
  const sections = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content:
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ];

  return (
    <div>
      <Banner />
      <section className='collapse-container'>
        {sections.map((section, index) => (
          <Collapse key={index} title={section.title}>
            <p>{section.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}
