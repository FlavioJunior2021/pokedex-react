import React, { useState,useEffect } from "react";
import { fetchAllPokemons } from '../../services/pokeApi';
import { usePokemon } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';

import { SelectComponent } from '../SelectPokemonComponent/index';

import './index.scss';

export function AllPokemonsComponent(){

    const [pokemons, setPokemons] = useState([]);
    const { setUserPokemon } = usePokemon();
    const nav = useNavigate();

    const [load, setLoad] = useState(30);

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
    
    function getPokemons(name){
        setUserPokemon(name);
        nav("/pokemon");
    }
        

    return(
        <div id="container2">
            {pokemons.map((pokemons, i) => 
                <Reveal>
                <button key={i} onClick={() => getPokemons(pokemons.name)}> 
                    <SelectComponent image={pokemons.sprite} name={pokemons.name} id={pokemons.id}/>
                </button>
                </Reveal>
            )}
            <button id="load-button" onClick={() => setLoad(load + 30)}>load more</button>
        </div> 
    );
};