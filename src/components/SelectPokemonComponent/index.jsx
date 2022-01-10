import React from 'react';

import './index.scss';

export function SelectComponent({name, specie, image}){
    return(
        <div id="container">
            <img src={ image } alt="pokemon" />
            <span>{ name }</span>
        </div>
    )
}