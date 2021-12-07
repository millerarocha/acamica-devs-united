import React from 'react';
import './Main.scss';

import Post from '../../containers/Post/Post';
import User from '../../containers/User/User';
import Card from '../../containers/Card/Card';

const Main = () => {
    return (
        <main className='main'>
            <User/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </main>
    )
}

export default Main;
