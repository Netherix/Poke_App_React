const fetchPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500'); // Adjust limit as needed
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (poke) => {
        const detailsResponse = await fetch(poke.url);
        const details = await detailsResponse.json();

        return {
          name: poke.name,
          sprite: details.sprites.front_default,
          attack: details.stats.find(stat => stat.stat.name === 'attack').base_stat,
          hp: details.stats.find(stat => stat.stat.name === 'hp').base_stat,
          speed: details.stats.find(stat => stat.stat.name === 'speed').base_stat,
          defense: details.stats.find(stat => stat.stat.name === 'defense').base_stat,
          type: details.types.map(t => t.type.name), // Array of types
        };
      })
    );

    // Sort alphabetically (A-Z)
    return pokemonDetails.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};

export default fetchPokemon;
