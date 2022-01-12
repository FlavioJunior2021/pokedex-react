import { useState } from 'react';

import { PokeMovesController } from '../PokeMovesComponent/index';

import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,especial,especial2,speed,type,weight,moves,height } ){

    const [click, setClick] = useState(false);
    const [movesArray, setMovesArray] = useState([]);
    const movesArr = [];

    async function getPokeMoves(){
       for(let i = 0; i < moves.length; i++){
           let thisMove = moves[i].move.url;
           let req = await fetch(thisMove);
           let json = await req.json();
           movesArr.push(json);
       }
       setMovesArray(movesArr);
    }
    function setMoves(){
        if(click){
            setClick(false);
        }else{
            setClick(true);
            getPokeMoves();
        }
    }

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
            <div className="info-stats">
                <p style={{backgroundColor: 'green'}}>life</p>
                <p style={{backgroundColor: '#FFCE2B'}}>speed</p>
                <p style={{backgroundColor: 'red'}}>attack</p>
                <p style={{backgroundColor: 'blue'}}>defense</p>
                <p style={{backgroundColor: '#371075'}}>especial defense</p>
                <p style={{backgroundColor: '#F25C05'}}>especial attack</p>
            </div>
            <div className="pokemon-stats">
                <div id="life" style={{border: "1px solid black", backgroundColor: 'green'}}>
                    <h3>
                        { hp }
                    </h3>
                </div>
                <div id="speed" style={{border: "1px solid black", backgroundColor: '#FFCE2B'}}>
                    <h3>
                        { speed }
                    </h3>
                </div>
                <div id="attack" style={{border: "1px solid black", backgroundColor: 'red'}}>
                    <h3>
                        { attack }
                    </h3>
                </div>
                <div id="defense" style={{border: "1px solid black", backgroundColor: 'blue'}}>
                    <h3>
                        { defense }
                    </h3>
                </div>
                <div id="especial-defense" style={{border: "1px solid black", backgroundColor: '#371075'}}>
                    <h3>
                        { especial2 }
                    </h3>
                </div>
                <div id="especial-attack" style={{border: "1px solid black", backgroundColor: '#F25C05'}}>
                    <h3>
                        { especial }
                    </h3>
                </div>
            </div>
        </div>
    );
};