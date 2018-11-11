import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import { Button } from './Button';

import {List} from 'immutable';

export class FoodItem extends React.Component {
    state = {
        loading: true
    }

    componentDidMount () {
        const toNavigate = List(this.props.location.pathname.split('/')).delete(0)
        this.props.loadItem(toNavigate.get(toNavigate.size - 1))
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading)
            return null;

        return (
            <React.Fragment>
                <div className='scrollable-div'>
                    <BreadCrumbs locations={this.props.location} />
                    <FoodItemImage price={2.54} />
                    <FoodItemDetails foodName='HAMBURGER' />
                    <div id='short-description-wrapper'>
                        <div id='text-wrapper-div'>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                    <FoodItemAllergens />
                </div>
                <FoodItemAmountButtons />
            </React.Fragment>
        );
    }
}

class FoodItemImage extends React.Component {
    render () {
        return (
            <div id='image-container-div'>
                <div>
                    <img id='item-image' src='../images/burger.png' />
                    <h3 id='item-price-image'>
                        <b>€{this.props.price}</b> <br/>
                        per stuk
                    </h3>
                </div>
            </div>
        );
    }
}

class FoodItemDetails extends React.Component {
    render () {
        return (
            <div id='add-remove-item-buttons-div'>
                <div id='add-remove-item-buttons-container'>
                    <div id='name-div'>
                        <h3 id='Itemtitle'>{this.props.foodName}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

class FoodItemAllergens extends React.Component {
    state = {
        open: false
    }

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({ open: !this.state.open })
    }

    render () {
        return (
            <React.Fragment>
                <div className='info-button-wrapper'>
                    <div className='button-div' id='allergy-info-div' onClick={this.handleClick}>
                        <div className='inner-button-div' id='allergy-info-button'>
                            <span>ALLERGENEN</span>
                        </div>
                    </div>
                </div>
                <div className={this.state.open ? 'food-info-wrapper' : 'food-info-wrapper hidden'}>
                    <div id='food-info-container'>
                        <label>Gluten</label><span>&#10003;</span>
                        <label>Soja</label><span />
                        <label>Noten</label><span />
                        <label>Pinda</label><span />
                        <label>Sesam</label><span />
                        <label>Melk</label><span>&#10003;</span>
                        <label>Ei</label><span>&#10003;</span>
                        <label>Vis</label><span />
                        <label>Schaaldieren</label><span />
                        <label>Selderij</label><span />
                        <label>Sulfiet</label><span />
                        <label>Mosterd</label><span>&#10003;</span>
                        <label>Lupine</label><span />
                        <label>Weekdieren</label><span />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class FoodItemAmountButtons extends React.Component {
    state = {
        amount: 1
    }

    constructor (props) {
        super(props)

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement () {
        this.setState({amount: this.state.amount + 1})
    }

    handleDecrement () {
        if (this.state.amount > 1)
            this.setState({amount: this.state.amount - 1})
    }

    render () {
        return (
            <div className='order__footer'>
                <div className='order-modifier'>
                        <Button className='order-modifier__button order-modifier__button--modify' label='-' onClick={this.handleDecrement} />
                        <input className='order-modifier__input' name='quantity' type='number' value={this.state.amount} />
                        <Button className='order-modifier__button order-modifier__button--modify' label='+' onClick={this.handleIncrement} />
                        <Button label='Toevoegen' className='order-modifier__button' />
                </div>
            </div>
        );
    }
}



export default FoodItem;