import React, { createContext, useState, useContext } from "react";

const PokeContext = createContext();

export default function ContextProvider({ children }){

    const [userPokemon, setUserPokemon] = useState({});

    return(
        <PokeContext.Provider value={{userPokemon, setUserPokemon}}>
            { children }
        </PokeContext.Provider>
    )
}

export function usePokemon(){
    const context = useContext( PokeContext );
    const {userPokemon, setUserPokemon} = context;
    return { userPokemon, setUserPokemon };
}