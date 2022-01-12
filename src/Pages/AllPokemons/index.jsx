import { AllPokemonsComponent } from '../../components/pokemonsComponent/index';

import { SearchComponent } from '../../components/SearchComponent/index';

export function AllPokemonsPage(){
    return(
        <div>
            <SearchComponent />
            <AllPokemonsComponent />
        </div>
    );
};