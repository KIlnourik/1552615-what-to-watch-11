import { SyntheticEvent, useState } from 'react';
import { RATING_MAX_VALUE } from '../../const';
import { getRatingValues } from '../../utils/utils';

function AddReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  function handleInputChange(evt: SyntheticEvent) {
    const { name, value } = evt.target as HTMLInputElement;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
  }

  function handleTextareaChange(evt: SyntheticEvent) {
    const { name, value } = evt.target as HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  }

  const ratingArray: number[] = getRatingValues(RATING_MAX_VALUE);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingArray.map((ratingValue: number) => (
            <>
              <input onChange={handleInputChange} className="rating__input" id="star-{ratingValue}" type="radio" name="rating" value="{ratingValue}" />
              <label className="rating__label" htmlFor="star-{ratingValue}">Rating {ratingValue}</label>
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
