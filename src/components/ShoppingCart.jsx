import React from 'react';

import Nav from '../containers/Nav';
import BreadCrumbs from '../components/BreadCrumbs';

export class ShoppingCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <BreadCrumbs locations={this.props.location} />
                <div id='orders-wrapper'>
                    <ShoppingCartItem title='Hamburger' price={3.36} numberOfItems={4} description={'Meaty'} />
                </div>
                <ShoppingCartCoupon />
                <ShoppingCartCost amount={9.32} />
                <div id='payment-wrapper'>
                    <div id='payment-button'>
                        <span>AFREKENEN</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export class ShoppingCartItem extends React.Component {
    render () {
        return (
            <div class='order'>
                <div class='image-and-text'>
                    <div class='order-image-wrapper'>
                        <img class='order-image' src='../images/burger.png' />
                    </div>
                    <div class='order-image-text'>
                        <h3 class='ShoppingCartItemTitle'>{this.props.title}</h3>
                        <h3 class='ShoppingCartItemTitle'>€{this.props.price}-</h3>
                        <label>Aantal:</label>
                        <span>{this.props.numberOfItems}</span>
                        <label>Soort:</label>
                        <span>{this.props.description}</span>
                        <label>Kaas?:</label>
                        <span>Ja</span>
                    </div>
                </div>
                <div class='OrderammountDiv'>
                    <button class='OrderammountButton' id='buttonRemove'><span class='glyphicon glyphicon-trash'></span>   Verwijder  Artikel</button>
                    <input class='OrderammountButton' id='buttonAmmount' value={this.props.numberOfItems} />
                </div>
            </div>
        );
    }
}

export class ShoppingCartCoupon extends React.Component {
    render () {
        return (
            <div id='coupon-payment-wrapper'>
                <label>COUPON</label>
                <input id='coupon-field' type='text' />
                <input id='coupon-submit' type='button' value='Toevoegen'/>
            </div>
        );
    }
}

export class ShoppingCartCost extends React.Component {
    render () {
        return (
            <div id='total-cost-div'>
                <label>TOTAAL</label>
                <div>
                    <span>${this.props.amount}</span>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;