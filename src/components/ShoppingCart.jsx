import React from 'react';

import { List } from 'immutable';

import Nav from '../containers/Nav';
import BreadCrumbs from '../components/BreadCrumbs';

export class ShoppingCart extends React.Component {
    render() {
        let totalPrice = 0;
        const displayItems = this.props.contents.map(
            (value, key) =>  {
                totalPrice += value * this.props.itemInfo.getIn(List([key, 'price']));
                return (
                    <ShoppingCartItem
                        key={'shoppingCartItem' + key}
                        title={this.props.itemInfo.getIn(List([key, 'title']))}
                        price={this.props.itemInfo.getIn(List([key, 'price']))}
                        numberOfItems={value}
                        description={'Meaty'}
                    />
                )
            }
        );

        return (
            <React.Fragment>
                <Nav />
                <BreadCrumbs locations={this.props.location} />
                <div id='orders-wrapper'>
                    {(displayItems.size > 0) ? displayItems.valueSeq() : <h3 className='shopping-cart__empty'>U heeft nog niks toegevoegd</h3>}
                </div>
                <ShoppingCartCoupon />
                <ShoppingCartCost amount={totalPrice} />
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
    constructor (props) {
        super(props);

        
    }

    render () {
        return (
            <div className='order'>
                <div className='image-and-text'>
                    <div className='order-image-wrapper'>
                        <img className='order-image' src={'../images/' + this.props.title + '.png'} />
                    </div>
                    <div className='order-image-text'>
                        <h3 className='ShoppingCartItemTitle'>{this.props.title}</h3>
                        <h3 className='ShoppingCartItemTitle'>€{this.props.price}-</h3>
                        <label>Aantal:</label>
                        <span>{this.props.numberOfItems}</span>
                        <label>Soort:</label>
                        <span>{this.props.description}</span>
                        <label>Kaas?:</label>
                        <span>Ja</span>
                    </div>
                </div>
                <div className='OrderammountDiv'>
                    <button className='OrderammountButton' id='buttonRemove'><span className='glyphicon glyphicon-trash'></span>   Verwijder  Artikel</button>
                    <input className='OrderammountButton' id='buttonAmmount' value={this.props.numberOfItems} />
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
                    <span>&euro;{this.props.amount}</span>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;