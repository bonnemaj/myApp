import React from 'react';
import Nav from './Nav';

import BreadCrumbs from './BreadCrumbs';
import { NavLink } from 'react-router-dom';

export class Categories extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id='category-filters-container'>
                    <div>
                        <h3>CATEGORIE</h3>
                        <img src='images/fillericon1.png' />
                    </div>

                    <div>
                        <h3>FILTER</h3>
                        <img src='images/fillericon2.png' />
                    </div>
                </div>
                <BreadCrumbs locations={this.props.location} />
                <div className='category-wrapper'>
                    <div className='two-items-wrapper'>
                        <CategoriesItem title='Bier' imgSource='images/amstelBier.png' location={this.props.location} />
                        <CategoriesItem title='hamburger' imgSource='images/burger.png' location={this.props.location} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class CategoriesItem extends React.Component {
    render() {
        return (
            <div className='category-item'>
                <NavLink to={this.props.location.pathname + '/' + this.props.title.toLowerCase()}>
                <div className='category-item__img'>
                    <img src={this.props.imgSource} />
                </div>
                <div className='category-item__title'>
                    <h3>{this.props.title}</h3>
                </div>
                </NavLink>
            </div>
            
        )
    }
}

export default Categories;