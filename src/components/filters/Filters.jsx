import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters({ handleName, filterName, handleHouse }) {
  return (
    <form>
      <FilterByName handleName={handleName} filterName={filterName} />
      <FilterByHouse handleHouse={handleHouse} />
    </form>
  );
}

export default Filters;
