import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Driver = () => <h1>Driver</h1>;
const Dvir = () => <h1>Dvir</h1>;
const Reports = () => <h1>Reports</h1>;
const routes = [
  {
    name: 'driver',
    render: Driver,
  },
  {
    name: 'dvir',
    render: Dvir,
  },
  {
    name: 'reports',
    render: Reports,
  },
]

const Home = () => (
  <ul>
    { routes.map(({ name, path }) => <li key={name}><Link to={path || `/${name}`}>{name}</Link></li>) }
  </ul>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={Home} />
          { routes.map(({ name, path, ...rest }) => <Route key={name} path={path || `/${name}`} {...rest} />) }
        </Switch>
      </div>
    );
  }
}

export default App;
