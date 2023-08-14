import React, { useEffect } from 'react';
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
  const { id } = useParams(); // Extract the 'id' parameter from the URL using useParams hook
  const lodgingItems = data.find((item) => item.id === id); // Find the lodgingItems data that matches the 'id'
  // The useNavigate hook allows you to programmatically navigate to different routes in your application.
  const navigate = useNavigate();

  useEffect(() => {
    if (!lodgingItems) {
      // If lodgingItems data is not found, navigate to the error page
      navigate('*'); 
    }
  }, [lodgingItems, navigate]);
  if (lodgingItems) {
  return (

      <section>
      <Carousel pictures={lodgingItems.pictures} title={lodgingItems.title} />

      <div className='hostAndTitle'>
        <Host name={lodgingItems.host.name} picture={lodgingItems.host.picture} />
        <TitleAndLocation title={lodgingItems.title} location={lodgingItems.location} />
      </div>

      <div className='TagAndRating'>
        <Tag tags={lodgingItems.tags} />
        <Rating rating={lodgingItems.rating} />
      </div>

      <div className='collapseLodging'>
        <Collapse title='Description'>
          <p>{lodgingItems.description}</p>
        </Collapse>
        <Collapse title='Équipements'>
          <ul>
          {lodgingItems.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
          ))}
          </ul>
        </Collapse>
      </div>

    </section>
  );}
};

export default Lodging;
  