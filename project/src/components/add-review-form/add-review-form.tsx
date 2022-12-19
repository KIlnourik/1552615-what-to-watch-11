import { SyntheticEvent, useState } from 'react';
import { EmptyUserReview, RATING_MAX_VALUE, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getRatingValues } from '../../utils/utils';
import { UserReview } from '../../types/user-review';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddReviewForm(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(EmptyUserReview);

  function handleInputChange(evt: SyntheticEvent) {
    const { name, value } = evt.target as HTMLInputElement;
    if (value) {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else {
      toast('Choose you rating!');
    }
  }

  function handleTextareaChange(evt: SyntheticEvent) {
    const { value } = evt.target as HTMLTextAreaElement;
    setFormData({ ...formData, comment: value });
  }

  const onSubmit = (reviewData: UserReview) => {
    dispatch(sendReviewAction(reviewData));
  };

  const handleFormSubmit = () => {
    if (id) {
      onSubmit({ ...formData, activeFilmId: id });
      navigate(`/films/${id}`);
    }
  };

  const ratingArray: number[] = getRatingValues(RATING_MAX_VALUE);

  return (
    <form action="" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingArray.map((ratingValue: number) => (
            <>
              <input onChange={handleInputChange} key={`${ratingValue}`} className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={`${ratingValue}`} required />
              <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleTextareaChange} className="add-review__textarea" name="reviewText" id="reviewText" placeholder="Review text" minLength={MIN_COMMENT_LENGTH} maxLength={MAX_COMMENT_LENGTH} required></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={formData.rating === 0 || formData.comment.length <= MIN_COMMENT_LENGTH || formData.comment.length >= MAX_COMMENT_LENGTH}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
