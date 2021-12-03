import React from 'react';
import './Login.scss';

import Welcome from '../../containers/Welcome/Welcome';
import LoginButton from '../../components/LoginButton/LoginButton';
import Footer from '../../containers/Footer/Footer';

const Login = () => {
    return (
        <main className='login'>
            <Welcome/>
            <div className="login__info">
                <h1 className='login__title'>Lorem <br/> ipsum dolor.</h1>
                <p className="login__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <LoginButton/>
                <Footer/>
            </div>
        </main>
    )
}

export default Login
