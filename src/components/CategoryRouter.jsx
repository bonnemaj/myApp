import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Categories from '../containers/Categories';
import FoodItem from '../components/FoodItem';
import Nav from '../containers/Nav';

export class CategoryRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route path='/keuzemenu' exact={true} component={Categories} />
                    <Route path='/keuzemenu/:item' exact={true} component={FoodItem} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default CategoryRouter;