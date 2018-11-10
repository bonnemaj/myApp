import {Home} from '../components/Home';
import {connect} from 'react-redux';

import { List, Map } from 'immutable';

const mapStateToProps = (state) => ({
    popularItems: List([
        Map({name: 'Hamburger', img: 'images/hamburgermc.jpg', url: ''}),
        Map({name: 'Pizzapunt', img: 'images/pizzapunt.png', url: ''}),
        Map({name: '0.5L Bier', img: 'images/amstelBier.png', url: ''})
    ]),
    newItems: List([
        Map({name: 'Groente', img: 'images/vegetables.jpg', url: ''}),
        Map({name: 'Frituur', img: 'images/snacks.jpg', url: ''}),
        Map({name: 'Patat', img: 'images/fries.jpg', url: ''})
    ]),
    carouselImages: List([
        'images/groenten.jpg',
        'images/twobeer.jpg',
        'images/burger.png'
    ])
});

export default connect(mapStateToProps, {})(Home);