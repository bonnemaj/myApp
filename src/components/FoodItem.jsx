import React from 'react';
import BreadCrumbs from './BreadCrumbs';

export class FoodItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BreadCrumbs locations={this.props.location} />
                <FoodItemImage price={2.54} />
                <FoodItemDetails foodName='HAMBURGER' />
                <div id="short-description-wrapper">
                    <div id="text-wrapper-div">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </div>
                </div>
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
            <div id="add-remove-item-buttons-div">
                <div id="add-remove-item-buttons-container">
                    <div id="name-div">
                        <h3 id="Itemtitle">{this.props.foodName}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodItem;