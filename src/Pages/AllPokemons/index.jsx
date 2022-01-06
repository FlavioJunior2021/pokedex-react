import { useState, useEffect } from 'react';

import { UsePokemon } from '../../hooks/usePokemon';

import { SearchComponent } from '../../components/SearchComponent/index';

import './index.scss';

export function AllPokemonsPage(){


    return(
        <div id="container">
            <SearchComponent />
        </div>
    )
}