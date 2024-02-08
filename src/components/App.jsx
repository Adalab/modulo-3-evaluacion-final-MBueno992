// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import apiData from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    apiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
      <Filters />
      <CharacterList data={characters} />
    </div>
  );
}

export default App;

//https://www.bing.com/images/create/una-imagen-realista-con-temc3a1tica-harry-potter-en-l/1-65c506da0a7f4233b95eacb002364f99?id=30ips%2bK9PrhwRUXAbRJNFQ%3d%3d&view=detailv2&idpp=genimg&idpclose=1&FORM=SYDBIC
