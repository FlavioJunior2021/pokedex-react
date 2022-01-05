import { fetchPokemon } from '../../services/pokeApi';

import './index.scss';

export function SearchComponent(){

    function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value
            handleSearch(target.toLowerCase());
        }
    }
    async function handleSearch(searchThis){
        let search = await fetchPokemon(searchThis);
        return search
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