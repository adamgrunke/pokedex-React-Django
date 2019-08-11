import React from 'react';

function PokemonDetails({pokemonName, pokemon, handleAddFav}) {
    let content;
    // console.log("from Details", pokemonName)
    // console.log(pokemon)
    // console.log(pokemon.species)
    content = (
        <>
            {/* <img src="{pokemon.sprites.front_default}"></img> */}
            <h1>Deh-tAY-ls</h1>
            <h3>{pokemonName}</h3>
            <p>Height: {pokemon.height}</p>
            <button onClick={ () => handleAddFav(pokemonName)}>Add to favorites!!!</button>
        </>
    )

    // when this button is selected, the add favorite state is changed. This change will trigger
    // the POST to the db with the NAME of the pokemon that is saved 


    return(
        <div className="App">
            {content}
        </div>
    )
}

export default PokemonDetails;