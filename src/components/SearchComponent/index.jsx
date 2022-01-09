import React from 'react';
import { usePokemon } from '../../context/context';
import { fetchPokemon } from '../../services/pokeApi'
import './index.scss';

export function SearchComponent(){

    const { setUserPokemon } = usePokemon();

    async function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value;
            let pokemon = await fetchPokemon(target);
            setUserPokemon(pokemon);
        }
    }

    return(
        <div id="search-component">
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
        </div>
    );
};