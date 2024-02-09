function FilterByGender({ handleGender, filterGender }) {
  return (
    <fieldset className="filters__gender">
      <label>Género</label>
      <div className="filters__gender--radio">
        <input
          type="radio"
          id="male"
          value="male"
          checked={filterGender === 'male'}
          onChange={(ev) => {
            handleGender(ev.target.value);
          }}
        />
        <label htmlFor="male">Hombre</label>
        <input
          type="radio"
          id="female"
          value="female"
          checked={filterGender === 'female'}
          onChange={(ev) => {
            handleGender(ev.target.value);
          }}
        />
        <label htmlFor="female">Mujer</label>
      </div>
    </fieldset>
  );
}

export default FilterByGender;
