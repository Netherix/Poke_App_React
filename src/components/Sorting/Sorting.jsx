const Sorting = ({ setSortBy, setFilterByType, types }) => {
  return (
    <>
      {/* Type Filter */}
      <select onChange={(e) => setFilterByType(e.target.value)}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Stat Sorting */}
      <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Alphabetical (Default)</option>
          <option value="attack">Attack</option>
          <option value="hp">HP</option>
          <option value="speed">Speed</option>
          <option value="defense">Defense</option>
        </select>
    </>
  );
};

export default Sorting;
