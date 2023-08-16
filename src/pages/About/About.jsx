import './About.scss';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutImage from '../../assets/about_pic.jpg';
import aboutSections from './AboutSections';


export default function About() {
  return (
    <div className='bannerAbout'>
      {/* Utilisation de la composante Banner pour afficher une bannière avec l'image à propos */}
      <Banner bannerImage={AboutImage} bannerTitle="" />
      <section className='collapse-container'>
        {/* Utilisation de la méthode map pour itérer à travers chaque section dans le tableau 'aboutSections' */}
        {aboutSections.map((section, index) => (
          // Affiche une composante Collapse pour chaque section avec le titre et le contenu correspondants
          <Collapse key={index} title={section.title}>
            <p>{section.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}
