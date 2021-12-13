import { useState } from 'react';
import { fetchPokemon } from '../../services/pokeApi';

import { ShowThisComponent } from '../ShowThisComponent/index'

import './index.scss';

export function SearchComponent(){

    const [pokeObj, setPokeObj] = useState({})

    function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value
            handleSearch(target.toLowerCase());
        }
    }
    async function handleSearch(searchThis){
        let search = await fetchPokemon(searchThis);
        setPokeObj(search);
    }
    return(
        <div id="search-component">
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
           <ShowThisComponent 
            image={ pokeObj.sprite }
           />
        </div>
    );
};