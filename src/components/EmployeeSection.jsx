import React from 'react';

import EmployeeHeader from './EmployeeHeader';

export class EmployeeSection extends React.Component {
    render () {
        return (
            <React.Fragment>
                <EmployeeHeader />
                <div>
                    <div className='orders'>
                        <EmployeeSectionItem />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class EmployeeSectionItem extends React.Component {

    state = {
        status: 'kitchen'
    }

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {

    }

    render () {
        return (
            <div className='orderBox' id='7943248'>
                <EmployeeSectionItemInfo />
            </div>
        );
    }
}

class EmployeeSectionItemInfo extends React.Component {
    render () {
        return (
            <React.Fragment>
                <table id='t01'>
                    <tbody><tr id='trTitle'>
                        <th id='th01'>17:45</th>
                        <th id='th01'>3:27</th>
                        <th id='th01'>#098</th>
                    </tr>
                </tbody></table>
                <table>
                    <tbody><tr>
                        <td>1</td>
                        <td></td>
                        <td id='td-wide'>Hamburger</td>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td id='td-wide'>Hot dog</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>M</td>
                        <td id='td-wide'>Friet met</td>
                    </tr>
                    <tr>
                        <td className='tdLast'>2</td>
                        <td className='tdLast'>S</td>
                        <td className='tdLast' id='td-wide'>Friet met</td>
                    </tr>
                </tbody></table>
            </React.Fragment>
        );
    }
}

export default EmployeeSection;