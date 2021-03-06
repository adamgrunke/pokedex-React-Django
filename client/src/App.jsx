import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails.jsx';
import PokemonFavorites from './components/PokemonFavorites';

function App() {
  const [pokemonCollection, setPokemonCollection] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [pokemonFavorites, setPokemonFavorites] = useState([])
  const [addFavPokemon, setAddFavPokemon] = useState(4)


  // GET GET GET - FROM API - Calls for the amount of Pokemon specified from the api.
  useEffect ( () => {
    // console.log("running the axios call for 151 pokemon useEffect")
    // axios.get('https://pokeapi.co/api/v2/pokemon/').then( (response) => {
    axios.get('http://pokeapi.co/api/v2/pokemon/?limit=151').then( (response) => {
      setPokemonCollection(response.data.results);
      // console.log(response.data.results)
    })
    axios.get('/pokemon/').then( (response) => {
      setPokemonFavorites(response.data);
    })
  }, [])
  
  // GET GET GET - FROM DB - This calls for the pokemon that have been stored in the database as favorites.
  // useEffect ( () => {
  //   // console.log("running the axios call for favorite pokemon useEffect")
  //   axios.get('/pokemon/').then( (response) => {
  //     setPokemonFavorites(response.data);
    
  //   })
  // },[pokemonFavorites.length]) // how will it know that the length of the array has changed without calling it??? 

  // GET GET GET - DETAILS FROM API - This request details for a specific pokemon from the api.
  useEffect ( () => {
    // console.log("running the axios call for pokemon DETAILS useEffect")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then( (response) => {
      setPokemon(response.data);
      // console.log(pokemon)
    })
  }, [pokemonName])

  // POST POST POST - ADD Favorite to DB - THis useEffect is intended to add a selected pokemon to the favorites list. 
  // useEffect ( () => {
  //   // console.log("running the axios call to POST a pokemon to fav db useEffect")
  //     axios.defaults.xsrfCookieName = 'csrftoken'
  //     axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
  //     axios.post('pokemon/', {name: pokemonName}).then( (response) => {
  //       console.log("POSTED??")
  //       setAddFavPokemon(response.data)
  //       // setAddFavPokemon(response.data)
  //     })
  // },[])


  return (
    <div className="App">
      <PokemonDetails pokemonName={pokemonName} pokemon={pokemon} setPokemonFavorites={setPokemonFavorites}  handleAddFav={setAddFavPokemon} />
      <hr />
      <PokemonFavorites pokemonFavorites={pokemonFavorites} handlePokemonSelect={setPokemonName} />
      <hr />
      <PokemonList pokemonCollection={pokemonCollection} handlePokemonSelect={setPokemonName} />
    </div>
  );
}

export default App;
