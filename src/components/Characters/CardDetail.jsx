import sinImg from '../../images/noImg.png';
import GryffindorShield from '../../images/GryffindorShield.png';
import SlytherinShield from '../../images/SlytherinShield.png';
import RavenclawShield from '../../images/RavenclawShield.png';
import HufflepuffShield from '../../images/HufflepuffShield.png';
import '../../scss/layout/CardDetails.scss';
import PropTypes from 'prop-types';

function CardDetail({ data }) {
  const imgShield = {
    Gryffindor: GryffindorShield,
    Slytherin: SlytherinShield,
    Ravenclaw: RavenclawShield,
    Hufflepuff: HufflepuffShield,
  };
  const nickNames = data.alternateNames.join(', ');

  return (
    <article key={data.id} className={`cardDetail ${data.house}`}>
      <img
        src={data.image !== '' ? data.image : sinImg}
        alt={data.name}
        className="cardDetail__image"
      />
      <div className="cardDetail__text">
        <h2 className="cardDetail__text--name">{data.name}</h2>
        {nickNames !== '' && (
          <p className="cardDetail__text--prop">
            Otros nombres: <span>{nickNames}</span>
          </p>
        )}

        <p className="cardDetail__text--prop">
          Especie: <span>{data.specie}</span>
        </p>
        <p className="cardDetail__text--prop">
          Estatus:
          {data.alive ? (
            <span>
              Vivo <i className="fa-solid fa-heart-pulse"></i>
            </span>
          ) : (
            <span>
              No vivo <i className="fa-solid fa-skull"></i>
            </span>
          )}
        </p>
        <p className="cardDetail__text--prop">
          Género:<span> {data.gender}</span>
        </p>
        {data.house !== '' && (
          <>
            <p className="cardDetail__text--prop">
              Casa: <span>{data.house}</span>
            </p>
            <img
              src={imgShield[data.house]}
              alt="Escudo de la casa"
              className="cardDetail__shield"
            />
          </>
        )}
      </div>
    </article>
  );
}
CardDetail.propTypes = {
  data: PropTypes.array,
};

export default CardDetail;
