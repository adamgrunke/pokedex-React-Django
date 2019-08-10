import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails.jsx';
import PokemonFavorites from './components/PokemonFavorites';

function App() {
  const [pokemonCollection, setPokemonCollection] = useState([])
  const [pokemonName, setPokemonName] = useState(["bulbasaur"])
  const [pokemon, setPokemon] = useState({})
  const [pokemonFavorites, setPokemonFavorites] = useState({})

  useEffect ( () => {
    console.log("running the axios call for 151 pokemon useEffect")
    axios.get('https://pokeapi.co/api/v2/pokemon/').then( (response) => {
      setPokemonCollection(response.data.results);
      // console.log(response.data.results)
    })
  }, [])

  useEffect ( () => {
    console.log("running the axios call for favorite pokemon useEffect")
    axios.get('/pokemon/').then( (response) => {
      setPokemonFavorites(response.data);
    
    })
  },[pokemonFavorites.length])

  useEffect ( () => {
    console.log("running the axios call for pokemon DETAILS useEffect")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then( (response) => {
      setPokemon(response.data);
      // console.log(pokemon)
    })
  }, [pokemonName])




  return (
    <div className="App">
      <PokemonDetails pokemonName={pokemonName} pokemon={pokemon} />
      <hr />
      <PokemonFavorites pokemonFavorites={pokemonFavorites} />
      <hr />
      <PokemonList pokemonCollection={pokemonCollection} handlePokemonSelect={setPokemonName} />
    </div>
  );
}

export default App;
