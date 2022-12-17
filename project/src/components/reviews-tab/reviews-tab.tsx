import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/data-process/selector';
import { Review } from '../../types/reviews-types';

function getReview(review: Review): JSX.Element {
  return (
    <div className="review" key={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{(new Date(review.date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }))}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

function ReviewsTab(): JSX.Element {

  const reviews = useAppSelector(getReviews);
  const userReviews = [...reviews];
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {userReviews.slice(0, userReviews.length / 2).map((review) => getReview(review))}
      </div>
      <div className="film-card__reviews-col">
        {userReviews.slice(userReviews.length / 2, userReviews.length).map((review) => getReview(review))}
      </div>
    </div>
  );
}

export default ReviewsTab;
