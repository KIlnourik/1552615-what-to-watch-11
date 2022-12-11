import { SyntheticEvent, useState } from 'react';
import { EmptyUserReview, RATING_MAX_VALUE } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getRatingValues } from '../../utils/utils';
import { UserReview } from '../../types/user-review';
import { useNavigate, useParams } from 'react-router-dom';

function AddReviewForm(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(EmptyUserReview);

  function handleInputChange(evt: SyntheticEvent) {
    const { name, value } = evt.target as HTMLInputElement;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
  }

  function handleTextareaChange(evt: SyntheticEvent) {
    const { value } = evt.target as HTMLTextAreaElement;
    setFormData({ ...formData, comment : value });
  }

  const onSubmit = (reviewData: UserReview) => {
    dispatch(sendReviewAction(reviewData));
  };

  const handleFormSubmit = (evt: SyntheticEvent) => {
    if (id) {
      onSubmit({ ...formData, activeFilmId: id });
      navigate(`/films/${id}/reviews`);
    }
  };

  const ratingArray: number[] = getRatingValues(RATING_MAX_VALUE);

  return (
    <form action="" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingArray.map((ratingValue: number) => (
            <>
              <input onChange={handleInputChange} key={`${ratingValue}`} className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={`${ratingValue}`} />
              <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleTextareaChange} className="add-review__textarea" name="reviewText" id="reviewText" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
