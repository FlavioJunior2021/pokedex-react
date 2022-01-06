import { useContext } from 'react';
import { CreateAuthContext } from '../context/pokeContext';

export function UsePokemon(){
    const value = useContext( CreateAuthContext );
    return value
}