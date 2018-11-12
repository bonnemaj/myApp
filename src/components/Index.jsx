import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import CategoryRouter from '../components/CategoryRouter';
import ShoppingCart from '../containers/ShoppingCart';
import EmployeeSection from '../containers/EmployeeSection';
 
export default class Index extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={false} path='/uitchecken' component={ShoppingCart} />
                <Route exact={false} path='/keuzemenu' component={CategoryRouter} />
                <Route exact={true} path='/medewerker' component={EmployeeSection} />
            </Switch>
        );
    }
}