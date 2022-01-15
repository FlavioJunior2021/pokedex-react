import React from "react";
import './index.scss';

export function PokemonStats({life, attack, defense, especialAttactk, especialDefense, speed}){
    return(
        <div id="pokemon-stats">
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: 'green'}}>
                    <h2>{ life }</h2>
                </div>
                <p>life</p>
            </section>
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: 'red'}}>
                    <h2>{ attack }</h2>
                </div>
                <p>attack</p>
            </section>
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: 'blue'}}>
                    <h2>{ defense }</h2>
                </div>
                <p>defense</p>
            </section>
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: 'yellowgreen'}}>
                    <h2>{ speed }</h2>
                </div>
                <p>speed</p>
            </section>
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: '#7F2CFF'}}>
                    <h2>{ especialAttactk }</h2>
                </div>
                <p>special Attactk</p>
            </section>
            <section id="description">
                <div className="stats" style={{border: "1px solid black", backgroundColor: '#2DE0A2'}}>
                    <h2>{ especialDefense }</h2>
                </div>
                <p>especial Defense</p>
            </section>
        </div>
    );
};