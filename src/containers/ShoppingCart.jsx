import ShoppingCart from '../components/ShoppingCart';
import { connect } from 'react-redux';

import { getFoodItems } from '../selectors/FoodSelector';
import { getContents } from '../selectors/ShoppingCart';

const mapStateToProps = (state) => ({
    itemInfo: getFoodItems(state),
    contents: getContents(state)
});

export default connect(mapStateToProps, {})(ShoppingCart);