function FilterByHouse({ handleHouse }) {
  return (
    <>
      <label>Búsqueda por casa: </label>
      <select
        onChange={(ev) => {
          handleHouse(ev.target.value);
        }}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuf</option>
        <option value="">Otros</option>
      </select>
    </>
  );
}

export default FilterByHouse;
