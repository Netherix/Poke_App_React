const fetchPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (poke) => {
        const detailsResponse = await fetch(poke.url);
        const details = await detailsResponse.json();

        return {
          name: poke.name,
          sprite: details.sprites.front_default,
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
          defense: details.stats[2].base_stat,
          specialAttack: details.stats[3].base_stat,
          specialDefense: details.stats[4].base_stat,
          speed: details.stats[5].base_stat,
          type: details.types.map(t => t.type.name),
        }
      })
    )
    return pokemonDetails;
    
  } catch (error) {
      console.error('Error fetching pokemon:', error);
      return [];
  }

}

export default fetchPokemon;