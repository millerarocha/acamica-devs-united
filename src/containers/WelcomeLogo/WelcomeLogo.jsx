import React from 'react';
import './WelcomeLogo.scss';

import logo from '../../assets/images/logo-big.png';

const WelcomeLogo = () => {
    return (
        <header className='welcome'>
            <img src={logo} alt="devs united logo" className='welcome__logo'/>
        </header>
    )
}

export default WelcomeLogo;
