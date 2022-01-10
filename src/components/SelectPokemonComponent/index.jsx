import React from 'react';

import './index.scss';

export function SelectComponent({image,name, id}){
    return(
        <div id="container3">
            <p>{ name }</p>
            <p>{ id }</p>
            <div className="image">
                <img src={ image } alt="pokemon" />
            </div>
        </div>
    )
}