import FoodItem from '../components/FoodItem';
import {connect} from 'react-redux';

import { getItemInfo } from '../selectors/FoodSelector';

import { loadItem } from '../actions/foodItem';
import { addItemToShoppingCart } from '../actions/shoppingCart';

const mapStateToProps = state => ({
    itemInfo: getItemInfo(state)
});

export default connect(mapStateToProps, {loadItem, addItemToShoppingCart})(FoodItem);