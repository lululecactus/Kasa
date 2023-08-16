import StarColor from '../../assets/star_color.png';
import StarGrey from '../../assets/star_grey.png';
import './Rating.scss';

export default function Rating({ rating }) {

  const numberOfStars = rating;

  return (
    <div className='ratings'>
      {/* Utilisation de la fonction Array.from pour créer un tableau de 5 éléments */}
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < numberOfStars ? StarColor : StarGrey}
          alt={index < numberOfStars ? "star" : "empty-star"}
        />
      ))}
    </div>
  );
}






