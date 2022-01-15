import React from "react";
import './index.scss';

export function PokemonStats({life, attack, defense, especialAttactk, especialDefense, speed}){
    return(
        <div id="pokemon-stats">
            <section id="life">
                <div className="life-stats" style={{border: "1px solid black", backgroundColor: 'green'}}>
                    <h2>{ life }</h2>
                </div>
                <p>life</p>
            </section>
        </div>
    );
};