import { usePokemon } from '../../context/context';
import { ShowThisComponent } from '../../components/ShowThisComponent/index';

import './index.scss';

export function PokemonUserPage(){

    const { userPokemon } = usePokemon();

    return (
        <div id="container">
            <ShowThisComponent 
                name={userPokemon.name}
            />
        </div>
    )
}