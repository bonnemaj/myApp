import React from 'react';
import Carousel from 'react-image-carousel';
import Nav from './Nav';
import { BreadCrumbs } from './BreadCrumbs';

export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <HomeSlides images={this.props.carouselImages} />
                <div id='actions-wrapper'>
                    <div id='actions-div'>
                        <div id='actions-text-wrapper'>BEKIJK ALLE ACTIES</div>
                    </div>
                </div>
                <ProductTitle title='POPULAIRE PRODUCTEN'/>
                <ProductRow items={this.props.popularItems} keyName='PP' />
                <ProductTitle title='NIEUWE PRODUCTEN'/>
                <ProductRow items={this.props.newItems} keyName='NP' />
            </React.Fragment>
        );
    }
}

class HomeSlides extends React.Component {
    render() {
        return (
            <div className='my-carousel'>
                <Carousel images={this.props.images.toArray()} 
                            thumb={true}
                            loop={true}
                            autoplay={6000}>
                </Carousel>
            </div>
        );
    }
}

class ProductTitle extends React.Component {
    render () {
        return (
            <div className='text-div'>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

class ProductRow extends React.Component {
    render () {
        const items = this.props.items.map(
            (item, index) =>  (
                    <div className='product-div' key={this.props.keyName + index}>
                        <img src={item.get('img')} alt={item.get('name')}/>
                        <div>
                            <h3>{item.get('name')}</h3>
                        </div>
                    </div>
                )
        );

        return (
            <div className='products-wrapper-div'>
                {items}
            </div>
        );
    }
}

export default Home;