import React from 'react';
import axios from 'axios';


function PokemonDetails({pokemonName, pokemon, handleAddFav}) {
    let content;
    // console.log("from Details", pokemonName)
    // console.log(pokemon)
    // console.log(pokemon.species)
    // console.log(pokemonName, {pokemon})
    // console.log({pokemon.name})
    
    content = (
        <div className="details">
            {/* <img src={pokemon.front_default}></img> */}
            <h1>Deh-tAY-ls</h1>
            <h3>{pokemonName}</h3>
            <p>Height: {pokemon.height}</p>
            {/* <button onClick={ () => handleAddFav(pokemonName)}>Add to favorites!!!</button> */}
            <button onClick={addToFaves}>>Add to favorites!!!</button>
        </div>
    )

    function addToFaves() {
		axios.post('pokemon/', {
			name: pokemonName
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