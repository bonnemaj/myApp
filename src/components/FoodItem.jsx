import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import { Button } from './Button';

export class FoodItem extends React.Component {
    render() {
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
                    <div class='button-div' id='allergy-info-div' onClick={this.handleClick}>
                        <div class='inner-button-div' id='allergy-info-button'>
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
    render () {
        return (
            <div id='footer-Order'>
                <div class='order-modifier'>
                        <Button className='order-modifier__button' label='-' />
                        <input name='quantity' id='input-add-to-cart' type='number' min='1' max='5' value='0' />
                        <Button className='button-add-to-cart' label='+' />
                        <Button label='Toevoegen' />
                </div>
            </div>
        );
    }
}



export default FoodItem;