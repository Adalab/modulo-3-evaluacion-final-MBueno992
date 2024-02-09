import gryffindor from '../images/gryffindor.png';
import slytherin from '../images/slytherin.png';
import ravenclaw from '../images/ravenclaw.png';
import hufflepuff from '../images/hufflepuff.png';
import hogwarts from '../images/hogwarts.png';
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
      <div className="header__houses">
        <div className="header__houses--flag">
          <img src={gryffindor} alt="gryffindor house" />
          <img src={slytherin} alt="slytherin house" />
        </div>
        <img src={hogwarts} alt="Hogwarts" className="header__houses--school" />
        <div className="header__houses--flag">
          <img src={ravenclaw} alt="ravenclaw house" />
          <img src={hufflepuff} alt="hufflepuff house" />
        </div>
      </div>

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
