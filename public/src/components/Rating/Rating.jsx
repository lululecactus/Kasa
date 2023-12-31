import StarColor from '../../assets/star_color.png';
import StarGrey from '../../assets/star_grey.png';

export default function Rating({ rating }) {
  const number0fStars = parseInt(rating);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < number0fStars ? StarColor : StarGrey}
          alt={index < number0fStars ? "star" : "empty-star"}
        />
      ))}
    </div>
  );
}






