import FilterByGender from './FilterByGender';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import ResetFilters from './ResetFilters';

function Filters({
  handleName,
  filterName,
  handleHouse,
  handleGender,
  filterGender,
  handleReset,
}) {
  return (
    <form className="header__filters">
      <FilterByName handleName={handleName} filterName={filterName} />
      <FilterByHouse handleHouse={handleHouse} />
      <FilterByGender handleGender={handleGender} filterGender={filterGender} />
      <ResetFilters handleReset={handleReset} />
    </form>
  );
}

export default Filters;
