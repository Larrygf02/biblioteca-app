import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import Suscriptores from './componentes/suscriptores/Suscriptores'
import MostrarSuscriptor from './componentes/suscriptores/MostrarSuscriptor'
import EditarSuscriptor from './componentes/suscriptores/EditarSuscriptor'
import NuevoSuscriptor from './componentes/suscriptores/NuevoSuscriptor'

import Navbar from './componentes/layout/Navbar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/suscriptores" component={Suscriptores}></Route>
            <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor}></Route>
            <Route exact path="/suscriptores/:id" component={MostrarSuscriptor}></Route>
            <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
