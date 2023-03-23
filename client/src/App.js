import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './componentes/LandingPage/LandingPage';
import Home from './componentes/Home/Home'
import PokemonCreated from './componentes/PokemonCreated/PokemonCreated'
import Detail from './componentes/Detail/Detail'
import axios from 'axios';

axios.defaults.baseURL = 'https://pi-pokemon-app.vercel.app/';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component= {LandingPage} />
        <Route exact path='/home' component= {Home} />
        <Route exact path='/create' component= {PokemonCreated} />
        <Route exact path='/home/:id' component= {Detail} />
    </Switch>
  </div>
  </BrowserRouter>
  )
}

export default App;
