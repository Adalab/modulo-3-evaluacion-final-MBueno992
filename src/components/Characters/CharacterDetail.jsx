import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';

function CharacterDetail({ data }) {
  const { urlId } = useParams();

  const cardData = data.find((char) => char.id === urlId);

  return (
    <section>
      <CharacterCard data={cardData} />
    </section>
  );
}

export default CharacterDetail;
