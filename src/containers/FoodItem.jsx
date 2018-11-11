import FoodItem from '../components/FoodItem';
import {connect} from 'react-redux';

import { foodItems } from '../selectors/FoodSelector';

import { loadItem } from '../actions/foodItem';

const mapStateToProps = state => {
    return ({});
};

export default connect(mapStateToProps, {loadItem})(FoodItem);