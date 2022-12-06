import { useAppDispatch} from '../../hooks/index';
import { showMoreFilms } from '../../store/action';


function ShowMoreButton():JSX.Element {

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(showMoreFilms());
  };

  return (
    <div className="catalog__more">
      <button onClick={handleShowMoreButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
