import { BrowserRouter } from 'react-router-dom';
import { CreateAuthContext }  from './context/pokeContext';

import './Scss/global.scss';

function App() {
  return (
    <BrowserRouter>
      <CreateAuthContext />
    </BrowserRouter>
  );
}

export default App;

