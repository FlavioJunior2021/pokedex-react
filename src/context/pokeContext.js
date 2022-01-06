import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

import { AllPokemonsPage } from '../Pages/AllPokemons/index';
import { PokemonUserPage } from '../Pages/pokemonUser/index';

export const AuthContext = createContext({});

export function CreateAuthContext({}){

    const [userPokemon, setUserPokemon] = useState();


    return(
        <AuthContext.Provider value={{ userPokemon,setPokemon }}>
            <Routes>
                <Route path="/" exact element={ <AllPokemonsPage /> } />
                <Route path="/pokemon/:name" exact element={ <PokemonUserPage /> } />
            </Routes>
        </AuthContext.Provider>
    )

}