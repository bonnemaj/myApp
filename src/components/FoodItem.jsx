import React from 'react';
import BreadCrumbs from './BreadCrumbs';

export class FoodItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='image-container-div'>
                    <div>
                        <img src='../images/burger.png' className='item-image' />
                    </div>
                </div>
                <BreadCrumbs locations={this.props.location} />
                <div id='add-remove-item-buttons-div'>
                    <div id='add-remove-item-buttons-container'>
                        <div id='increment-button-div'>
                            <label>-</label>
                        </div>
                        <div id='input-field-items-div'>
                            <input typ='number' />
                        </div>
                        <div id='button-decrement-div'>
                            <label>+</label>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default FoodItem;