import React from 'react';
import { Link } from 'react-router-dom';

import { usePokemon } from '../../context/context';
import { ShowThisComponent } from '../../components/ShowThisComponent/index';

import './index.scss';

export function PokemonUserPage(){

    const { userPokemon } = usePokemon();
    

    return (
        <div id="PokemonUser">
            <Link to="/">Return</Link>
            <ShowThisComponent 
                name={ userPokemon.name }
                image={ userPokemon.sprite }
                type={ userPokemon.type }
                weight={ userPokemon.weight }
                hp={ userPokemon.hp }
                attack={ userPokemon.attack }
                defense={ userPokemon.defense }
                speed={userPokemon.speed}
                especial={userPokemon.especial}
                especial2={userPokemon.especial2}
                moves={ userPokemon.moves }
            />
        </div>
    )
}