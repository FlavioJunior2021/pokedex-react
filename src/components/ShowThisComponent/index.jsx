import { useState } from 'react';
import { PokemonStats } from '../PokemonStatsComponent/index';

import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,especial,especial2,speed,type,weight,height } ){
    return(
        <div id="show-component">
            <div className="header">
                <h1>{ name }</h1>
                <div id="poke-image">
                    <img src={ image } alt="pokémon" />
                </div>
                <div className="poke-info">
                    <p>{ (height/10 ).toPrecision() }M</p>
                    <p>&lt; { type } &gt;</p>
                    <p>{ (weight/10).toPrecision()}KG</p>
                </div>
            </div>
            <h1>Statistics</h1>
            <div className="pokemon-stats">
                <PokemonStats 
                    life={ hp }
                    attack={ attack }
                    defense={ defense }
                    speed={ speed }
                    especialAttactk={ especial }
                    especialDefense={ especial2 }
                />
            </div>
        </div>
    );
};