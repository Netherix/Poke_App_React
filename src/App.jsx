import './App.css';
import { useEffect, useState } from 'react';
import Sorting from './components/Sorting/Sorting';
import fetchPokemon from './api/fetchPokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterByType, setFilterByType] = useState('');
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokemon();
      setPokemon(pokemonList);

      // Collect all unique types from Pokémon data
      const types = [...new Set(pokemonList.flatMap((p) => p.type))];
      setAllTypes(types);
    };

    getPokemon();
  }, []);

  console.log(pokemon)

  // Apply type filter
  let filteredPokemon = [...pokemon];
  if (filterByType) {
    filteredPokemon = filteredPokemon.filter((poke) => poke.type.includes(filterByType));
  }

  // Apply stat sorting
  if (sortBy) {
    filteredPokemon.sort((a, b) => b[sortBy] - a[sortBy]); // Descending order
  }

  return (
    <>
      <Sorting setSortBy={setSortBy} setFilterByType={setFilterByType} types={allTypes} />
      {filteredPokemon.map((poke, index) => (
        <div key={index}>
          <p>{poke.name}</p>
          <img src={poke.sprite} alt={poke.name} />
        </div>
      ))}
    </>
  );
}

export default App;
