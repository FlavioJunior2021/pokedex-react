import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { fetchPokemon } from '../../services/pokeApi';

import { usePokemon } from '../../context/context';
import { ShowThisComponent } from '../../components/ShowThisComponent/index';

import './index.scss';
import close from '../../assets/images/x(1).svg';

export function PokemonUserPage(){

    const { userPokemon } = usePokemon();
    const [ pokemon,setPokemon ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function setPokeUser(){
            let req = await fetchPokemon(userPokemon);
            setPokemon(req);
        }
        setPokeUser().catch(() => {
            navigate("/");
        })
    },[])
    

    return (
        <div id="PokemonUser">
            <ShowThisComponent 
                name={ pokemon.name }
                image={ pokemon.sprite }
                type={ pokemon.type }
                weight={ pokemon.weight }
                hp={ pokemon.hp }
                attack={ pokemon.attack }
                defense={ pokemon.defense }
                speed={pokemon.speed}
                especial={pokemon.especial}
                especial2={pokemon.especial2}
                moves={ pokemon.moves }
                height={ pokemon.height }
            />
            <Link to="/" id='link'>
                <img src={ close } alt="closer" />
            </Link>
        </div>
    )
}

