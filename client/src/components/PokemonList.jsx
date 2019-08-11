import React from 'react';

function PokemonList({pokemonCollection, handlePokemonSelect}) {
    let content;
    if (pokemonCollection.length) {
        content = pokemonCollection.map((pokemon, id) => {
            return <p className="pokemon" onClick={() => handlePokemonSelect(pokemon.name)} key={id}>{pokemon.name}</p>
        })
    } else {
        content = (
        <div className="pokemon" >
            <p >.... collection Pokemon.</p>
        </div>
        )
    }

    return (
        <div className="list">
            {content}
        </div>
    );
}

export default PokemonList;