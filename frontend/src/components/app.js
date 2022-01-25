import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import WineIndexContainer from './wine_index/wine_index_container'
import CollectionContainer from './collection/collection_container'
import TagContainer from './tag/tag_container';
import AboutUs from './about/about';
import ImageCredit from './about/images';
import SearchResultsContainer from './search/search_results_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <Route path="/welcome" component={Splash} />
        <Route path="/about" component={AboutUs} />
        <Route path="/credit" component={ImageCredit} />
        <Route exact path="/wines/tags/:tagName" component={TagContainer} />
        <Route exact path="/wines/tags/:tagName/:pageNumber" component={TagContainer} />
        <ProtectedRoute exact path="/search/:keyword" component={SearchResultsContainer} />
        <ProtectedRoute exact path="/wines" component={WineIndexContainer} />
        <ProtectedRoute exact path="/collections/:collectionId" component={CollectionContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;