import React, { useState, useEffect } from "react";
import fetchPokemon from "./api/fetchPokemon";
import Sorting from "./components/Sorting/Sorting";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);

      // Collect all types
      const types = [...new Set(data.flatMap((p) => p.type))];
      setAllTypes(types);  // Set the types state
    };

    fetchPokeData();
  }, []);

  console.log(allTypes)
  console.log(pokemon)

  let sortPokemon = [...pokemon];
  if (sortBy === "alphabetical") {
    sortPokemon.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy) {
    sortPokemon.sort((a, b) => b[sortBy] - a[sortBy]);
  }

  return (
    <div>
      <Sorting setSortBy={setSortBy} />
      {sortPokemon.map((poke) => (
        <div key={poke.name}>
          <p>{poke.name}</p>
          <img src={poke.sprite} alt={poke.name} style={{ height: "100px", width: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default App;
