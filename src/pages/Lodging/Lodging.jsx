
import React from 'react';
import data from '../../data/data.json';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import Host from '../../components/Host/Host';
import TitleAndLocation from '../../components/TitleAndLocation/TitleAndLocation';
import './Lodging.scss';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';

const Lodging = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL using useParams hook
  const lodging = data.find((item) => item.id === id); // Find the lodging data that matches the 'id'


  return (
    <section>
      {/* Render the Carousel component only if 'lodging' data is available */}
      {lodging && <Carousel pictures={lodging.pictures} title={lodging.title} />}
      <div className='lodgingBlock'>
        {lodging && <Host name={lodging.host.name} picture={lodging.host.picture} />}
        {lodging && <TitleAndLocation title={lodging.title} location={lodging.location} />}
      </div>
      <div> 
        {lodging && <Tag tags={lodging.tags} />}
        {lodging && <Rating rating={lodging.rating} />}
      </div> 
    </section>
  );
};

export default Lodging;
  