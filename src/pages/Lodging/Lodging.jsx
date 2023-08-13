
import React from 'react';
import data from '../../data/data.json';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';

const Lodging = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL using useParams hook
  const lodging = data.find((item) => item.id === id); // Find the lodging data that matches the 'id'


  return (
    <div>
      {/* Render the Carousel component only if 'lodging' data is available */}
      {lodging && <Carousel pictures={lodging.pictures} title={lodging.title} />}
    </div>
  );
};

export default Lodging;
  