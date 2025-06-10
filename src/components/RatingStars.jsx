import { roundRating } from '../utils/helpers';
import Star from './icons/Star';
import StarHalf from './icons/StarHalf';
import StarOutline from './icons/StarOutline';

function RatingStars({ rating, ...restProps }) {
  const roundedRating = roundRating(rating);
  const starCount = Math.floor(roundedRating);
  const starHalfCount = roundedRating - starCount === 0.5 ? 1 : 0;
  const starOutlineCount = 5 - starCount - starHalfCount;

  return (
    <div {...restProps}>
      {starCount > 0 &&
        Array.from({ length: starCount }, (_, i) => <Star key={`star_${i}`} />)}
      {starHalfCount > 0 &&
        Array.from({ length: starHalfCount }, (_, i) => (
          <StarHalf key={`starHalf_${i}`} />
        ))}
      {starOutlineCount > 0 &&
        Array.from({ length: starOutlineCount }, (_, i) => (
          <StarOutline key={`starOutline_${i}`} />
        ))}
    </div>
  );
}

export default RatingStars;
