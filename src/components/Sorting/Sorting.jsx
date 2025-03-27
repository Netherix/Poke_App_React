import React from 'react';

const Sorting = ({ setSortBy }) => {
  return (
    <>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Default</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="hp">HP</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        <option value="specialAttack">Special Attack</option>
        <option value="specialDefense">Special Defense</option>
        <option value="speed">Speed</option>
      </select>
    </>
  );
};

export default Sorting;
