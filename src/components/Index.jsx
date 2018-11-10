import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import CategoryRouter from '../components/CategoryRouter';
import ShoppingCart from '../containers/ShoppingCart';
 
export default class Index extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={false} path='/uitchecken' component={ShoppingCart} />
                <Route exact={false} path='/keuzemenu' component={CategoryRouter} />
            </Switch>
        );
    }
}