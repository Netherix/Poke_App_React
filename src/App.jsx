import { useState, useEffect } from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        if (!response) {
          throw new Error(`HTTP Error: ${response.status}`)
        }
        const data = await response.json();
        setPokemon(data.results)
      } catch (error) {
          console.error('Error fetching pokemon:', error)
      }
    }
    fetchData();
  });

  return (
    <>
      {pokemon.map((poke) => (
        <p>{poke.name}</p>
      ))}
    </>
  )
}

export default App

// https://pokeapi.co/api/v2/pokemon/
// ask about offset