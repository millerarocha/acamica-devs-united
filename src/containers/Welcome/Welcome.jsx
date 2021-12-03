import React from 'react';
import './Welcome.scss';

import logo from '../../assets/images/logo-big.png';

const Welcome = () => {
    return (
        <header className='welcome'>
            <img src={logo} alt="devs united logo" className='welcome__logo'/>
        </header>
    )
}

export default Welcome;
