import PropTypes from 'prop-types';

function FilterByHouse({ handleHouse }) {
  return (
    <>
      <label className="filters__house">
        Búsqueda por casa
        <select
          onChange={(ev) => {
            handleHouse(ev.target.value);
          }}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuf</option>
          <option value="Otros magos">Otros magos</option>
          <option value="Muggles">Muggles</option>
        </select>
      </label>
    </>
  );
}
FilterByHouse.propTypes = {
  handleHouse: PropTypes.func,
};

export default FilterByHouse;
