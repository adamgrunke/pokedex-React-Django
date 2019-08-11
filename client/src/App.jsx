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
  const [addFavPokemon, setAddFavPokemon] = useState();


  // GET GET GET - FROM API - Calls for the amount of Pokemon specified from the api.
  useEffect ( () => {
    console.log("running the axios call for 151 pokemon useEffect")
    axios.get('https://pokeapi.co/api/v2/pokemon/').then( (response) => {
      setPokemonCollection(response.data.results);
      // console.log(response.data.results)
    })
  }, [])

  // GET GET GET - FROM DB - This calls for the pokemon that have been stored in the database as favorites.
  useEffect ( () => {
    console.log("running the axios call for favorite pokemon useEffect")
    axios.get('/pokemon/').then( (response) => {
      setPokemonFavorites(response.data);
    
    })
  },[pokemonFavorites.length]) // how will it know that the length of the array has changed without calling it??? 

  // GET GET GET - DETAILS FROM API - This request details for a specific pokemon from the api.
  useEffect ( () => {
    console.log("running the axios call for pokemon DETAILS useEffect")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then( (response) => {
      setPokemon(response.data);
      // console.log(pokemon)
    })
  }, [pokemonName])

  // POST POST POST - ADD Favorite to DB - THis useEffect is intended to add a selected pokemon to the favorites list. 
  useEffect ( () => {
    console.log("running the axios call to POST a pokemon to fav db useEffect")
    axios.post('/pokemon/').then( (response) => {
      console.log("POSTED??")
    })
  },[addFavPokemon])



  return (
    <div className="App">
      <PokemonDetails pokemonName={pokemonName} pokemon={pokemon} handleAddFav={setAddFavPokemon} />
      <hr />
      <PokemonFavorites pokemonFavorites={pokemonFavorites} />
      <hr />
      <PokemonList pokemonCollection={pokemonCollection} handlePokemonSelect={setPokemonName} />
    </div>
  );
}

export default App;
