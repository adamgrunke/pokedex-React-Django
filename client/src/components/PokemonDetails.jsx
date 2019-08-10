import React from 'react';

function PokemonDetails({pokemonName, pokemon}) {
    let content;
    // console.log("from Details", pokemonName)
    console.log(pokemon)
    console.log(pokemon.species)
    content = (
        <>
            {/* <img src="{pokemon.sprites.front_default}"></img> */}
            <h1>Deh-tAY-ls</h1>
            <h3>{pokemonName}</h3>
            <p>Height: {pokemon.height}</p>
            <button>Add to favorites!!!</button>
        </>
    )



    return(
        <div className="App">
            {content}
        </div>
    )
}

export default PokemonDetails;