function ResetFilters({ handleReset }) {
  return (
    <button
      onClick={(ev) => {
        handleReset(ev);
      }}
    >
      Reset
    </button>
  );
}

export default ResetFilters;
