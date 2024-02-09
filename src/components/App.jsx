// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import apiData from '../services/api';
import CharacterList from './Characters/CharacterList';
import Filters from './filters/Filters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './Characters/CharacterDetail';
import local from '../services/localStorage';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(local.get('name', ''));
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    apiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  useEffect(() => {
    local.set('name', filterName);
  });

  const handleName = (value) => {
    setFilterName(value);
  };

  const handleHouse = (value) => {
    setFilterHouse(value);
  };

  const handleGender = (value) => {
    setFilterGender(value);
  };

  const filterCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((char) => char.house === filterHouse)
    .filter((char) => {
      if (filterGender === 'female') {
        return char.gender === 'female';
      } else if (filterGender === 'male') {
        return char.gender === 'male';
      } else {
        return true;
      }
    })
    .sort((first, second) => {
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

  const handleReset = (ev) => {
    ev.preventDefault();
    setFilterName('');
    setFilterHouse('Gryffindor');
    setFilterGender('');
  };

  return (
    <>
      <Header
        handleName={handleName}
        filterName={filterName}
        handleHouse={handleHouse}
        handleGender={handleGender}
        filterGender={filterGender}
        handleReset={handleReset}
      />
      {/* <Filters
        handleName={handleName}
        filterName={filterName}
        handleHouse={handleHouse}
        handleGender={handleGender}
        filterGender={filterGender}
      /> */}

      <Routes>
        <Route
          path="/"
          element={
            <CharacterList data={filterCharacters} filterName={filterName} />
          }
        />
        <Route
          path="/details/:urlId"
          element={<CharacterDetail data={characters} />}
        />
      </Routes>
    </>
  );
}

export default App;

//https://www.bing.com/images/create/una-imagen-realista-con-temc3a1tica-harry-potter-en-l/1-65c506da0a7f4233b95eacb002364f99?id=30ips%2bK9PrhwRUXAbRJNFQ%3d%3d&view=detailv2&idpp=genimg&idpclose=1&FORM=SYDBIC
