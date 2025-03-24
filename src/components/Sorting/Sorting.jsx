const Sorting = ({ setSortBy }) => {
  return (
    <>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Default</option>
        <option value="Alphabetical">Alphabetical</option>
      </select>
    </>
  );
};

export default Sorting;
