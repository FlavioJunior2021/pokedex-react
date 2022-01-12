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
                    <p>{ (weight*100).toPrecision()}G</p>
                </div>
            </div>
        </div>
    );
};