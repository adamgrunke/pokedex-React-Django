import React from 'react';

function PokemonFavorites({pokemonFavorites, handlePokemonSelect}) {
    let content;
    // console.log("Pkfav",pokemonFavorites,pokemonFavorites.length)
    if (pokemonFavorites.length ) {
        // console.log('looping favorites')
        content = pokemonFavorites.map((pokemon, id) => {
            return <p   className="faves" onClick={() => handlePokemonSelect(pokemon.name)} key={id}>{pokemon.name}</p>
        })
    } else {
        content = <p>Save your favorite Pokemon here!</p>
    }

    return (
        <div>
            <h4>favorites</h4>
            {content}
        </div>    )
}

export default PokemonFavorites;