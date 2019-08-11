import React from 'react';

function PokemonDetails({pokemonName, pokemon, handleAddFav}) {
    let content;
    // console.log("from Details", pokemonName)
    // console.log(pokemon)
    // console.log(pokemon.species)
    // console.log(pokemonName, {pokemon})
    // console.log(pokemon.abilities[0])
    content = (
        <div className="details">
            {/* <img src={pokemon.front_default}></img> */}
            <h1>Deh-tAY-ls</h1>
            <h3>{pokemonName}</h3>
            <p>Height: {pokemon.height}</p>
            <button onClick={ () => handleAddFav(pokemon.name)}>Add to favorites!!!</button>
        </div>
    )

    // when this button is selected, the add favorite state is changed. This change will trigger
    // the POST to the db with the NAME of the pokemon that is saved 


    return(
        <div>
            {content}
        </div>
    )
}

export default PokemonDetails;