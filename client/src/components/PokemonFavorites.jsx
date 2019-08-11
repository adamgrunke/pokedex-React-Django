import React from 'react';

function PokemonFavorites({pokemonFavorites}) {
    let content;
    // console.log("Pkfav",pokemonFavorites,pokemonFavorites.length)
    if (pokemonFavorites.length ) {
        // console.log('looping favorites')
        content = pokemonFavorites.map((pokemon, id) => {
            return <p   className="faves" key={id}>{pokemon.name}</p>
        })
    } else {
        content = <p>Save your favorite Pokemon here!</p>

    }

    return (
        <div>
            {content}
        </div>    )

}

export default PokemonFavorites;