import CharacterCard from './CharacterCard';
import '../scss/layout/CharacterList.scss';

function CharacterList({ data }) {
  const dataList = data.map((char) => {
    return (
      <li key={char.id} className="characters__list--card">
        <CharacterCard data={char} />
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
