// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import apiData from '../services/api';
import CharacterList from './CharacterList';
import Filters from './filters/Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');

  useEffect(() => {
    apiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleName = (value) => {
    setFilterName(value);
  };

  const handleHouse = (value) => {
    setFilterHouse(value);
  };

  const filterCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((char) => char.house === filterHouse);

  const orderName = filterCharacters.sort((first, second) => {
    const firstName = first.name;
    const secondName = second.name;
    if (firstName < secondName) {
      return -1;
    }
    if (firstName > secondName) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <h1>Hola mundo</h1>
      <Filters
        handleName={handleName}
        filterName={filterName}
        handleHouse={handleHouse}
      />
      <CharacterList data={filterCharacters} />
    </div>
  );
}

export default App;

//https://www.bing.com/images/create/una-imagen-realista-con-temc3a1tica-harry-potter-en-l/1-65c506da0a7f4233b95eacb002364f99?id=30ips%2bK9PrhwRUXAbRJNFQ%3d%3d&view=detailv2&idpp=genimg&idpclose=1&FORM=SYDBIC
