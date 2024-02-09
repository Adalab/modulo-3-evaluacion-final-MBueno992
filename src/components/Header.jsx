import background from '../images/header.png';
import '../scss/layout/Header.scss';
import Filters from './filters/Filters';

function Header({
  handleName,
  filterName,
  handleHouse,
  handleGender,
  filterGender,
  handleReset,
}) {
  return (
    <header className="header">
      <Filters
        handleName={handleName}
        filterName={filterName}
        handleHouse={handleHouse}
        handleGender={handleGender}
        filterGender={filterGender}
        handleReset={handleReset}
      />
    </header>
  );
}

export default Header;
