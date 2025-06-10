import RatingStars from './RatingStars';

function Rating({ rating, ...restProps }) {
  return (
    <div aria-label={`Rating: ${rating}`} {...restProps}>
      <RatingStars rating={rating} />
      <div>{rating}</div>
    </div>
  );
}

export default Rating;
