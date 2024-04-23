import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../services/pokemonService";

import '../style/PokemonListStyle.css';
import NavBar from "./NavBar";

const PokemonList = () => {
    // State to store the list of Pokemon
    const [pokemonList, setPokemonList] = useState([]);
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(0);
    // Limit the number of Pokemon displayed per page
    const limit = 10;

    // useEffect hook to fetch Pokemon list when the component mounts or the currentPage changes
    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonList(limit, currentPage * limit);
            // Fetch details for each Pokemon and add typeClass for styling
            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                const details = await getPokemonDetails(pokemon.name);
                const primaryType = details.types[0].type.name;
                const typeClass = `pokemon-${primaryType.toLowerCase()}`;
                return { ...pokemon, imageUrl: details.sprites.front_default, typeClass };
            }));
            setPokemonList(pokemonDetails);
        };

        fetchPokemon();
    }, [currentPage]); // Dependency array ensures the effect runs when the currentPage changes

    // Handlers for pagination
    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
            <NavBar />

            {/* Display Pokemon cards */}
            <div className="pokemon-wrap">
                {pokemonList.map((pokemon, index) => (
                    <div className={`pokemon ${pokemon.typeClass}`} key={pokemon.name}>
                        <a href={`/Pokedex/?/pokemon/${pokemon.name}`}>
                            <div className="number">#{index + 1 + (currentPage * limit)}</div>
                            <div className="image-and-name">
                                <div className="pokemon-name">{pokemon.name}</div>
                                <img className="pokemon-image" src={pokemon.imageUrl} alt={pokemon.name} />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            {/* Display pagination buttons */}
            <div className="switch-page-buttons">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    &lt; Previous
                </button>
                <button onClick={handleNextPage}>
                    Next &gt;
                </button>
            </div>
        </>
    );
};

export default PokemonList;
