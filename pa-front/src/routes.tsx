import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screems/Landing';
import PointsMap from './screems/PointsMap';
import PointDetails from './screems/PointDetails';
import Register from './screems/Register';

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
