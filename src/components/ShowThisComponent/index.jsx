import { useState } from 'react';

import { PokeMovesController } from '../PokeMovesComponent/index';

import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,especial,especial2,speed,type,weight,species, moves } ){

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
            <div className="poke-img">
                <img src={ image } alt="pokemón" />
            </div>
            <div className="poke-stats">
                <h1>{ name }</h1>
                <div className="poke-info">
                    <p>type: { type }</p>
                    <p>weight: { weight }hg</p>
                    <p>hp: { hp }</p>
                </div>
                <div className="poke-attributes">
                    <p>attack: { attack }</p>
                    <p>defense: {defense }</p>
                    <p>speed: { speed }</p>
                </div>
                <h1>special</h1>
                <div className="poke-attributes">
                    <p>especial attack: { especial }</p>
                    <p>especial defense: { especial2 }</p>
                </div>
            </div>
            <div className="poke-moves">
                    <h1>blows</h1>
                    <div>
                        <button onClick={setMoves} className="btn-true"> moves </button>
                    </div>
                    {click === true ? <div>
                        {movesArray.map((moves, index) => <PokeMovesController 
                            key={index}
                            moves={ moves.name }
                            movePower={ moves.power }
                        /> ) }
                        </div> : <></>
                    }
            </div>
        </div>
    );
};