import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import WineIndexContainer from './wine_index/wine_index_container'
import CollectionIndexItemContainer from './collection/collection_container'
import { Express } from 'express';

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  App.use(Express.static('frontend/build'));
  App.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <Route path="/welcome" component={Splash} />
        <ProtectedRoute exact path="/wines" component={WineIndexContainer} />
        <ProtectedRoute exact path="/collections/:collectionId" component={CollectionIndexItemContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;