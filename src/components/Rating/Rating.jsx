import './Rating.scss'
import StarColor from '../../assets/star_color.png';
import StarGrey from '../../assets/star_grey.png';

export default function Rating ({rating}){
  // Check if the rating is valid (between 1 and 5)
  const isValidRating = rating >= 1 && rating <= 5;
    return (   
    
     <div className="Rating">
      {/* If the rating is valid, render colored stars and 
      use the 'index' as the key for each star image */}
      {isValidRating 
        ? Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={index < Math.floor(rating) ? StarColor : StarGrey}
            alt="étoile"
            className="Rating_star"
          />
        ))
        // If the rating is not valid, render 5 gray stars
        : Array(5).fill().map((_, index) => (
          <img
            key={index}
            src={StarGrey}
            alt="Étoile grise"
            className="Rating_star"
          />
        ))
      }   
    </div> 
    )
};