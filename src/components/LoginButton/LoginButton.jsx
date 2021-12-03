import React from 'react';

import './LoginButton.scss';

import googleIcon from '../../assets/images/google_icon.png';

const LoginButton = ({
    icon={googleIcon},
    text='Sign in with Google',
    onClick
}) => {
    return (
        <div
            className='login-btn'
            onClick={onClick}
        >
            <img src={googleIcon} alt="" className="login-btn__icon" />
            <p className="login-btn__text">
                {text}
            </p>
        </div>
    )
}

export default LoginButton;
