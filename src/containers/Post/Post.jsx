import React from 'react';
import './Post.scss';

import UserPicture from '../../components/UserPicture/UserPicture';
import TextArea from '../../components/TextArea/TextArea';
import Button from '../../components/Button/Button';

import logo from '../../assets/images/logo-small.png';
import logoTitle from '../../assets/images/logo-title.png';

const Post = () => {
    return (
        <div className='post'>
            <header className="post-header">
                <UserPicture
                    isSmall={true}
                    isBig={false}
                />
                <div className="post-header__logo">
                    <img src={logo} alt="logo" />
                    <img src={logoTitle} alt="title"/>
                </div>
            </header>
            <div className="post__container">
                <UserPicture
                    isBig={false}
                />
                <div className="post__form">
                    <TextArea/>
                    <Button
                        isPost={true}
                        text='Post'
                    />
                </div>
            </div>
        </div>
    )
}

export default Post;
