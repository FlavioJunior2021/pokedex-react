import React from 'react';

import { usePokemon } from '../../context/context';
import { ShowThisComponent } from '../../components/ShowThisComponent/index';

export function PokemonUserPage(){

    const { userPokemon } = usePokemon();
    console.log(userPokemon)

    return (
        <div>
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