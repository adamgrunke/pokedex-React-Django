import React from 'react';

function PokemonList({pokemonCollection, handlePokemonSelect}) {
    let content;
    if (pokemonCollection.length) {
        content = pokemonCollection.map((pokemon, id) => {
            return <p onClick={() => handlePokemonSelect(pokemon.name)} key={id}>{pokemon.name}</p>
        })
    } else {
        content = <p>.... collection Pokemon.</p>
    }

    return (
        <div className="App">
            {content}
        </div>
    );
}

export default PokemonList;