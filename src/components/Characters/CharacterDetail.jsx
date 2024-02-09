import { Link, useParams } from 'react-router-dom';

import CardDetail from './CardDetail';

function CharacterDetail({ data }) {
  const { urlId } = useParams();

  const cardData = data.find((char) => char.id === urlId);

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

export default CharacterDetail;
