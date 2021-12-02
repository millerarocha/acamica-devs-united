import React from 'react';

import './LikeButton.scss';

import iconFill from  '../../assets/images/heart-icon-fill.svg';
import iconNoFill from '../../assets/images/heart-icon-no-fill.svg';

const LikeButton = ({
    isLiked=false,
    count=0,
    onClick
}) => {
    return (
        <div className='like-btn'>
            <img 
                src={isLiked?iconFill:iconNoFill} 
                alt="like button" 
                className='like-btn__img'
                onClick={onClick}
            />
            <p 
                className={`like-btn__count  ${isLiked?'like-btn__count--red':''}`}
            >
                {count}
            </p>
        </div>
    )
}

export default LikeButton;
