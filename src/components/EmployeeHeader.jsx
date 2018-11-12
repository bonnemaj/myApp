import React from 'react';

export class EmployeeHeader extends React.Component {
    render () {
        return (
            <div id='employee-header'>
                <div className='employee-header__logo--container'>
                    <img className='employee-header__logo' src='images/FC-banner-medewerkers.png'/>
                </div>

                <div id='employee-header-pickup-point'>
                    <select className='Employee-Location' id='select-pickup-point'>
                        <option>Kies afhaalpunt</option>
                        <option value='1'>Z-side 1</option>
                        <option value='2'>F-side 2</option>
                        <option value='3'>Helpman 1</option>
                        <option value='4'>Ophaalpunt 8</option>
                    </select>
                </div>

                <div id='employee-header-pickup-point'>
                    <select className='Employee-department' id='select-pickup-point'>
                        <option value='0'>Kies afdeling</option>
                        <option value='1'>Keuken</option>
                        <option value='2'>Voorbereiding</option>
                        <option value='3'>Afgeefbalie</option>
                    </select>
                </div>

                <div id='employee-logout'>
                    <div id='logout-button-container'>
                        <i className='fas fa-sign-out-alt'></i>
                    </div>
                </div>

                <div id='time'>23:26:59</div>


            </div>
        );
    }
}

export default EmployeeHeader;