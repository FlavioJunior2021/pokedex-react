import { AllPokemonsComponent } from '../../components/pokemonsComponent/index';

import { SearchComponent } from '../../components/SearchComponent/index';

import './index.scss';

export function AllPokemonsPage(){
    return(
        <div>
            <SearchComponent />
            <AllPokemonsComponent />
        </div>
    );
};