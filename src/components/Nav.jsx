import React from 'react';

import { NavLink, Redirect } from 'react-router-dom';

export class Nav extends React.Component {
    state = {
        menuState: false
    }

    constructor(props) {
        super(props);

        this.changeMenuState = this.changeMenuState.bind(this);
    }

    changeMenuState(newState) {
        this.setState({
            menuState: newState
        })
    }
    

    render() {
        return (
            <React.Fragment>
                <NavHeader changeMenuState={this.changeMenuState} menuState={this.state.menuState} />
                <NavMenu changeMenuState={this.changeMenuState} menuState={this.state.menuState}/>
            </React.Fragment>
        );
    }
}

export class NavHeader extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changeMenuState(!this.props.menuState)
    }

    render() {
        return (
            <div id='header'>
                <div id='header-logo-div'>
                    <div id='header-logo-wrapper-div'>
                        <img src='../images/logo.png' alt='../images/logo.png' id='header-logo-img'/>
                    </div>
                </div>
                <div id='header-search-div' className='header-button'>
                    <img src='../images/magnifying.png' alt='' />
                </div>
                
                <div id='header-storeCart-Div' className='header-button'>
                    <NavLink to='/uitchecken'>
                        <img src='../images/shoppingcart.png' alt='' />
                    </NavLink>
                </div>
                
                <div id='header-menu-div' className='header-button' onClick={this.handleClick}>
                    <img src='../images/menu.png' alt='' />
                </div>
            </div>
        );
    }
}

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.menuState) {
          this.props.changeMenuState(false)
        }
    }

    render() {
        return (
            <div id='modal-wrapper' className={(this.props.menuState) ? 'modal-wrapper--open' : ''}>
                <div id='modal' ref={this.setWrapperRef}>
                    <div className='modal-content'>
                        <img src='../images/shoppingcart.png' />
                        <span>BESTELLEN</span>
                    </div>

                    <NavLink to='/keuzemenu'>
                        <div className='modal-content'>
                            <img src='../images/list.png' />
                            <span>CATEGORIEËN</span>
                        </div>
                    </NavLink>

                    <NavLink to='/contact'>
                        <div className='modal-content'>
                            <img src='../images/contact.png' />
                            <span>CONTACT</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Nav;