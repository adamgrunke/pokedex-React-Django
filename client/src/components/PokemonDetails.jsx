import React from 'react';
import axios from 'axios';

function PokemonDetails({pokemonName, pokemon, setPokemonFavorites, handleAddFav}) {
// refactor by removing pokemonName. use pokemon.name instead.

    let content;
    // console.log(pokemon.sprites.front_default)
    
    // if (true) {
    //     content = <p> select pokemon to learn more about them</p>
    // } else {

    // }
            content = (
                <div className="details">
                    <h1>Deh-tAY-ls</h1>
                    <h3>{pokemonName}</h3>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    {/* <img src={pokemon.sprites.front_default}></img> */}
                    {/* <button onClick={ () => handleAddFav(pokemonName)}>Add to favorites!!!</button> */}
                    <button onClick={addToFaves}>>Add to favorites!!!</button>
                </div>
            )
    
    
    

    function addToFaves() {
		axios.post('/pokemon/', {
			name: pokemon.name
		}).then( () => {
            axios.get('/pokemon/').then( (response) => {
                setPokemonFavorites(response.data);
            })
        })
	}
    // when this button is selected, the add favorite state is changed. This change will trigger
    // the POST to the db with the NAME of the pokemon that is saved 
    return(
        <div>
            {content}
        </div>
    )
}

export default PokemonDetails;