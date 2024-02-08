import '../scss/layout/CharacterCard.scss';

function CharacterCard({ data }) {
  return (
    <article className="card">
      <img
        src={
          data.image !== ''
            ? data.image
            : 'https://th.bing.com/th/id/OIG1.2juI_WcYDZdweNjbu3qx?pid=ImgGn'
        }
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
