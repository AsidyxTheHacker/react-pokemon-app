import React from 'react';

function PokemonList({ pokemon }) {

    return(
    <>
    <div className="pokemon-container">
    {pokemon.map(p => (
        <p key={p} className="pokemon-text">{p}</p>
        ))}
    </div>
    </>
    )
};

export default PokemonList;