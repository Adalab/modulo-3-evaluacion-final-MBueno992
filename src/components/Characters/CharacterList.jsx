import CharacterCard from './CharacterCard';
import '../../scss/layout/CharacterList.scss';
import { Link } from 'react-router-dom';

function CharacterList({ data }) {
  const dataList = data.map((char) => {
    return (
      <li key={char.id} className="characters__list--card">
        <Link to={`/details/${char.id}`}>
          {' '}
          <CharacterCard data={char} />
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
