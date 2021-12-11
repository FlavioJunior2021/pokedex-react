import { useState } from 'react';
import { fetchPokemon } from '../../services/pokeApi';

import { ShowThisComponent } from '../ShowThisComponent/index'

import './index.scss';

export function SearchComponent(){

    const [pokeImg, setPokeImg] = useState("");
    const [name, setName] = useState("");
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [defenseMax, setDefenseMax] = useState(0);
    const [attackMax, setAttackMax] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [type, setType] = useState("");
    const [weight, setWeight] = useState(0);
    const [species, setSpecies] = useState("");

    function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value
            handleSearch(target.toLowerCase());
        }
    }
    async function handleSearch(searchThis){
        let search = await fetchPokemon(searchThis);
        setPokeImg(search.sprite);
        setName(search.name);
        setHp(search.hp);
        setAttack(search.attack);
        setDefense(search.defense);
        setDefenseMax(search.especial2);
        setAttackMax(search.especial);
        setSpeed(search.speed);
        setType(search.type);
        setWeight(search.weight);
        setSpecies(search.species);
    }

    return(
        <div id="search-component">
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
            <ShowThisComponent 
                image={ pokeImg }
            />
        </div>
    );
};