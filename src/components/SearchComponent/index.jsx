import React from 'react';
import { usePokemon } from '../../context/context';
import toast, { Toaster } from 'react-hot-toast';

import { fetchTest } from '../../services/pokeApi';

import { useNavigate } from 'react-router-dom';

import './index.scss';

export function SearchComponent(){

    const { setUserPokemon } = usePokemon();
    const navigate = useNavigate();

    async function testPokemon(pokemon){
        let poke = await fetchTest(pokemon);
        return poke;
    }

    async function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value;
            await testPokemon(target).then(() => {
                setUserPokemon(target);
                navigate("/pokemon");
            }).catch(() => {
                toast.error("pesquise o nome corretamente")
            })
        }
    }


    return(
        <div id="search-component">
            <Toaster
                toastOptions={{
                    duration: 4000,
                    style:{
                        border: '1px solid #000',
                        padding: '16px',
                        color: 'red',
                        fontFamily: 'Readex Pro, sans-serif'
                    }
                }}
            />
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
        </div>
    );
};