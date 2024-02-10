import FilterByGender from './FilterByGender';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import '../../scss/layout/Filters.scss';

function Filters({
  handleName,
  filterName,
  handleHouse,
  handleGender,
  filterGender,
  handleReset,
}) {
  return (
    <form className="filters">
      <FilterByName handleName={handleName} filterName={filterName} />
      <FilterByHouse handleHouse={handleHouse} />
      <div className="filters__contain">
        <FilterByGender
          handleGender={handleGender}
          filterGender={filterGender}
        />
        <button
          className="filters__contain--resetBtn"
          onClick={(ev) => {
            handleReset(ev);
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default Filters;
