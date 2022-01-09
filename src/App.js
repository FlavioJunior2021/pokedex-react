import { Route ,BrowserRouter, Routes } from 'react-router-dom';

import ContextProvider from './context/context';

import { AllPokemonsPage } from './Pages/AllPokemons/index';
import { PokemonUserPage } from './Pages/pokemonUser/index'

import './Scss/global.scss';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={ <AllPokemonsPage /> } path="/" exact />
          <Route element={ <PokemonUserPage /> } path="/pokemon/name" />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

