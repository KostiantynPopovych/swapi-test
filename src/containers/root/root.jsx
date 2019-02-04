import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router ,Route, Switch, Redirect } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import store from '../../helpers/configure-store';

import People from '../people-page';
import PersonPage from '../person-page';
import Navigation from '../../components/header';

library.add(fas);

export default () => (
    <Provider store={store}>
        <Router>
            <>
                <Navigation type='header'/>
                    <Switch>
                        <Route exact path="/people" component={ People } />
                        <Route exact path="/person/:id" component={ PersonPage } />
                        <Redirect exact from="/" to="/people"/>
                    </Switch>
            </>
        </Router>
    </Provider>
);