import { Link, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import PropTypes from 'prop-types';

function CharacterDetail({ data }) {
  const { urlId } = useParams();

  const cardData = data.find((char) => char.id === urlId);
  if (!cardData) {
    return (
      <section className="detailPage">
        <Link to="/">
          <button className="detailPage__btn">
            <i className="fa-solid fa-wand-sparkles"></i> Volver
          </button>
        </Link>
        <p className="characters__notFound">
          El personaje que buscas no existe
        </p>
      </section>
    );
  }

  return (
    <section className="detailPage">
      <Link to="/">
        <button className="detailPage__btn">
          <i className="fa-solid fa-wand-sparkles"></i> Volver
        </button>
      </Link>
      <CardDetail data={cardData} />
    </section>
  );
}
CharacterDetail.propTypes = {
  data: PropTypes.array,
};

export default CharacterDetail;

// useEffect(() => {
//   const character = data.find((char) => char.id === urlId);
//   setCardData(character);
// }, [data, urlId]);
