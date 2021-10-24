import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import PointsMap from './pages/PointsMap';
import PointDetails from './pages/PointDetails';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/mapa" component={PointsMap} />
        <Route path="/restaurante/cadastro" component={Register} />
        <Route path="/restaurante/:id" component={PointDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
