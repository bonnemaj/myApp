import React from 'react';

import { NavLink } from 'react-router-dom';
import { List } from 'immutable';

export class BreadCrumbs extends React.Component {
    render () {
        const toNavigate = List(this.props.locations.pathname.split('/')).delete(0)
        const crumbs = toNavigate.map(
            (value, index) => {
                return (
                    <NavLink
                        to={'/' + value}
                        className='breadcrumbs__link'
                        key={'breadcrumb' + index}
                        activeClassName={'breadcrumbs__link--active'}
                    >
                        {value}
                    </NavLink>
                )
            }
        );

        return (
            <nav className='breadcrumbs'>
                <NavLink
                    to={'/'}
                    className='breadcrumbs__link'
                    key={'breadcrumb'}
                    activeClassName={'breadcrumbs__link--active'}
                >
                    Home
                </NavLink>
                {(toNavigate.get(0) == '') ? null : crumbs}
            </nav>
        );
    }
}

export default BreadCrumbs;