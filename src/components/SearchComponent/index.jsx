import { useState } from 'react';
import { fetchPokemon } from '../../services/pokeApi';

import { ShowThisComponent } from '../ShowThisComponent/index';

import './index.scss';

export function SearchComponent(){

    const [pokeObj, setPokeObj] = useState({})
    const [isLoading, setLoading] = useState(true);

    function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value
            handleSearch(target.toLowerCase());
        }
    }
    async function handleSearch(searchThis){
        let search = await fetchPokemon(searchThis);
        setPokeObj(search);
        setLoading(false);
    }

    return(
        <div id="search-component">
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
           {isLoading === false ? 
                <ShowThisComponent 
                    name={ pokeObj.name }
                    image={ pokeObj.sprite }
                    type={ pokeObj.type }
                    weight={ pokeObj.weight }
                    hp={ pokeObj.hp }
                    attack={ pokeObj.attack }
                    defense={ pokeObj.defense }
                    speed={pokeObj.speed}
                    especial={pokeObj.especial}
                    especial2={pokeObj.especial2}
               />
               : <p>loading...</p>
            }
        </div>
    );
};