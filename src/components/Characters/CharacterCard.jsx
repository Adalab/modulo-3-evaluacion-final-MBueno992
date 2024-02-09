import '../../scss/layout/CharacterCard.scss';
import sinImg from '../../images/noImg.png';

function CharacterCard({ data, style }) {
  return (
    <article className={style} id={data.id}>
      <img
        src={data.image !== '' ? data.image : sinImg}
        alt={data.name}
        className="card__image"
      />
      <div className="card__text">
        <h2>{data.name}</h2>
        <p>{data.specie}</p>
      </div>
    </article>
  );
}

export default CharacterCard;
