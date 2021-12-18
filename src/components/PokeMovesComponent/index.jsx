import React from 'react';

import './index.scss';

export function PokeMovesController({ moves, movePower, moveType, effect }){
    return(
        <div id="container">
            <p>
                move: { moves }
            </p>
            <p>
                power: { movePower }
            </p>
            <p>
                type: { moveType }
            </p>
            <p>
                effect: { effect }
            </p>
        </div>
    );
};