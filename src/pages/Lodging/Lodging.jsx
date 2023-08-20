import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Lodging.scss';
import data from '../../data/data.json';
import Carousel from '../../components/Carousel/Carousel';
import Host from '../../components/Host/Host';
import TitleAndLocation from '../../components/TitleAndLocation/TitleAndLocation';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';


const Lodging = () => {
  // Utilisation du hook useParams pour extraire le paramètre 'id' de l'URL
  const { id } = useParams();

  // Le hook useNavigate permet de naviguer vers différentes routes de l'application.
  const navigate = useNavigate();
  const [lodgingData, setLodgingData] = useState();

  useEffect(() => {

    const lodgingItems = data.find((item) => item.id === id);
    if (!lodgingItems) {
      // Si les données de 'lodgingItems' ne sont pas trouvées, navigue vers la page d'erreur
      navigate('error');
    } else {
      setLodgingData(lodgingItems);
    }
  }, [lodgingData, navigate, id]);


  if (lodgingData) {
    return (
      <section>
        {/* Affiche le carrousel avec les images de l'hébergement et le titre */}
        <Carousel pictures={lodgingData.pictures} title={lodgingData.title} />

        <div className='block'>
          {/* Affiche le titre et l'emplacement de l'hébergement, ainsi que les tags */}
          <div className='block_titleAndTag'>
            <TitleAndLocation title={lodgingData.title} location={lodgingData.location} />
            <Tag tags={lodgingData.tags} />
          </div>

          {/* Affiche les informations sur l'hôte et la note de l'hébergement */}
          <div className='block_ratingAndHost'>
            <Host name={lodgingData.host.name} picture={lodgingData.host.picture} />
            <Rating rating={parseInt(lodgingData.rating)} />
          </div>
        </div>

        <div className='collapseLodging'>
          {/* Affiche les collapse pour la description et les équipements de l'hébergement */}
          <Collapse title='Description'>
            <p>{lodgingData.description}</p>
          </Collapse>
          <Collapse title='Équipements'>
            <ul>
              {lodgingData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Lodging;
