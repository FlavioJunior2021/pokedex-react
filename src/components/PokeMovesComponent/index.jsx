import React from 'react';

import './index.scss';

export function PokeMovesController({ key, moves, movePower }){
    return(
        <div id="container" key={ key }>
            <p>
                move: { moves }
            </p>
            <p>
                power: { movePower }
            </p>
        </div>
    );
};