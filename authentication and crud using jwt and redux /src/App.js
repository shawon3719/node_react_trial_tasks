import React, { Component, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { useDispatch, useSelector } from 'react-redux';

import { LoginPage } from './views/admin/LoginPage';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Register = React.lazy(() => import('./views/admin/register/Register'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch> 
              {/* <Route exact path="/admin-index" name="Admin Dashboard" render={props => <TheLayout {...props}/>} /> */}
              <Route exact path="/login" name="Login Page" render={props => <LoginPage {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
