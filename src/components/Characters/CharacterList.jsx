import CharacterCard from './CharacterCard';
import '../../scss/layout/CharacterList.scss';
import { Link } from 'react-router-dom';

function CharacterList({ data, filterName }) {
  if (data.length === 0) {
    return (
      <p className="characters__notFound">
        No hay ningún personaje que coincida con {filterName}
      </p>
    );
  }

  const dataList = data.map((char) => {
    return (
      <li key={char.id} className={`characters__list--card ${char.house}`}>
        <Link to={`/details/${char.id}`} className="link">
          <CharacterCard data={char} style="card" />
        </Link>
      </li>
    );
  });

  return (
    <section className="characters">
      <ul className="characters__list">{dataList}</ul>
    </section>
  );
}

export default CharacterList;
