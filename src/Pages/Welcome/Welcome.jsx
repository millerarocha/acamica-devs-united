import React from 'react';

import './Welcome.scss';

import Button from '../../components/Button/Button';
import WelcomeLogo from '../../containers/WelcomeLogo/WelcomeLogo';
import Input from '../../components/Input/Input';
import ColorPicker from '../../containers/ColorPicker/ColorPicker';
import Footer from '../../containers/Footer/Footer';

const Welcome = () => {
    return (
        <main className='login'>
            <WelcomeLogo/>
            <div className="welcome__info">
                <h1 className='welcome__title'>Welcome <br/> <span>NAME!.</span></h1>
                <Input/>
                <ColorPicker/>
                <Button
                    text='CONTINUE'
                />
                <Footer/>
            </div>
        </main>
    )
}

export default Welcome;
