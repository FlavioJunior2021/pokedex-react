import React, { useState,useEffect } from "react";
import { fetchAllPokemons } from '../../services/pokeApi';

import { SelectComponent } from '../SelectPokemonComponent/index';

export function AllPokemonsComponent(){

    const [pokemons, setPokemons] = useState([]);
    const [load, setLoad] = useState(25);

    const allPokemons = [];

    useEffect(() => {
        async function getAllPokemons(){
            for (var i = 1; ; i++){
                let pokemon = await fetchAllPokemons(i);
                allPokemons.push(pokemon);
                if(i === load){
                    setPokemons(allPokemons);
                    break;
                }
            }
        }
        getAllPokemons();
    },[load])

    return(
        <div id="container">
            {pokemons.map((pokemons, i) => <SelectComponent key={i} name={pokemons.name} image={pokemons.sprite}/>)}
            <button onClick={() => setLoad(load + 25)}>load more</button>
        </div>
    );
};