import React from 'react';
import { usePokemon } from '../../context/context';

import { useNavigate } from 'react-router-dom';
import './index.scss';

export function SearchComponent(){

    const { setUserPokemon } = usePokemon();
    const navigate = useNavigate();


    async function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value;
            setUserPokemon(target);
            navigate("/pokemon");
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