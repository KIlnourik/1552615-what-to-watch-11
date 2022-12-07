
type Props = {
  handleShowMoreButtonClick: () => void;
}

function ShowMoreButton({handleShowMoreButtonClick}: Props):JSX.Element {

  return (
    <div className="catalog__more">
      <button onClick={handleShowMoreButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
